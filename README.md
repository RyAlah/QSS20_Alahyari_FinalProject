# Order to run

1. [00_data_cleanup.ipynb](code/00_data_cleanup.ipynb)
2. [01_data_merge.ipynb](code/01_data_merge.ipynb)
3. [02_data_plotvis.ipynb](code/02_data_plotvis.ipynb)

---

# 00_data_cleanup.ipynb

Takes in the raw census and ACS data files and cleans them for merging.

**Inputs:**
- [DECENNIALDP2020.DP1...csv](data/DECENNIALDP2020.DP1-2026-05-14T152641(2).csv) - 2020 census race data by tract
- [DECENNIALSF12010.P9...csv](<data/DECENNIALSF12010.P9-2026-05-19T020157 (2010).csv>) - 2010 census race data by tract
- [ACSST5Y2020.S1903-Data.csv](data/ACSST5Y2020.S1903-Data.csv) - 2020 median household income
- [ACSST5Y2010.S1903...csv](data/ACSST5Y2010.S1903-2026-06-01T055927.csv) - 2010 median household income
- [ACSDT5Y2020.B25064...csv](data/ACSDT5Y2020.B25064-2026-06-02T234432.csv) - 2020 median gross rent
- [ACSDT5YSPT2010.B25064...csv](data/ACSDT5YSPT2010.B25064-2026-06-02T234451.csv) - 2010 median gross rent
- [ACSDT5Y2020.B25077...csv](data/ACSDT5Y2020.B25077-2026-06-02T234543.csv) - 2020 median home value
- [ACSDT5Y2010.B25077...csv](data/ACSDT5Y2010.B25077-2026-06-02T234558.csv) - 2010 median home value

**What it does:**
- defines three helper functions: transpose_reset() which transposes each dataset so that tracts are rows rather than columns and resets the index, race_percentages() which calculates percentage columns for each racial group from raw counts, and transform_ACS_df() which wraps transpose_reset and also filters to estimate rows and extracts a tract_num float column
- for the 2020 census race data, transposes, filters out percentage rows (keeping only count rows), cleans column names using regex to remove hidden characters and tag duplicate column names with numbers, extracts and converts the relevant racial count columns to floats, calculates racial percentage columns
- for the 2010 census race data, does the same but simpler since it only has count rows
- for both datasets, manually codes near_hblr and near_path boolean columns by checking each tract's identifier against a hardcoded list of tracts within roughly 500 meters of an HBLR or PATH station
- cleans all four ACS datasets (2010/2020 rent and home value) using transform_ACS_df
- cleans the 2010 and 2020 income datasets separately, filtering to median estimate rows and converting values to floats. retains the household_num column from the 2020 income data for use as a merge weight later

**Outputs:**
- [data/2020cleaned1.csv](data/2020cleaned1.csv)
- [data/2010cleaned1.csv](data/2010cleaned1.csv)
- [data/2020income.csv](data/2020income.csv)
- [data/2010income.csv](data/2010income.csv)
- [data/2020rent.csv](data/2020rent.csv)
- [data/2010rent.csv](data/2010rent.csv)
- [data/2020housing.csv](data/2020housing.csv)
- [data/2010housing.csv](data/2010housing.csv)

---

# 01_data_merge.ipynb

Takes in all cleaned datasets and merges them into a single analysis-ready file.

**Inputs:**
- all eight cleaned csvs from 00_data_cleanup.ipynb

**What it does:**
- defines helper functions: add_tract_num() extracts a float tract number from the census tract string column using regex, get_match_key() maps 2020 tract numbers to their 2010 equivalents (some 2010 tracts were split into multiple tracts in 2020, this function collapses children back to the 2010 parent using a manual_map for edge cases), aggregate_race() uses get_match_key to aggregate 2020 race count columns by summing and boolean columns using OR, aggregate_ACS() uses get_match_key to aggregate 2020 median values using household-weighted averages, and categorize() assigns each tract one of four train_access values based on its near_hblr and near_path columns
- adds tract_num to all datasets
- aggregates the 2020 race data from 183 tracts down to 166 to match 2010 tract boundaries, then recalculates racial percentages from the aggregated counts
- drops tract 9801, an uninhabited special-use tract with a null household count
- merges household_num from the 2020 income data into the 2020 rent and home value datasets so they can be aggregated using weighted medians
- aggregates 2020 income, rent, and home value using household-weighted medians
- merges all datasets together on tract_num using sequential left merges into a single dataframe with 166 rows
- creates the train_access column using categorize()
- creates percentage point change columns for each race by subtracting the 2010 percentage from the 2020 percentage

**Outputs:**
- [data/hudsonmerged.csv](data/hudsonmerged.csv)

---

# 02_data_plotvis.ipynb

Takes in the merged dataset and produces all visualizations and statistical analyses.

**Inputs:**
- [data/hudsonmerged.csv](data/hudsonmerged.csv)
- [data/tl_2010_34017_tract10.shp](data/tl_2010_34017_tract10.shp) - 2010 Hudson County census tract boundaries
- [data/Light_Rail_Lines_of_NJ_Transit.shp](data/Light_Rail_Lines_of_NJ_Transit.shp) - HBLR line geometry
- [data/Path_Rail_Line.shp](data/Path_Rail_Line.shp) - PATH line geometry

**What it does:**
- groups the merged data by train_access, takes the mean of each racial pct_change column, melts to long format, and plots a grouped seaborn bar chart
- merges the merged dataset onto the 2010 TIGER shapefile, reprojects the HBLR and PATH shapefiles to match, and plots one choropleth map per race using a red-blue diverging colormap, overlaying the transit lines and clipping to Hudson County's bounding box
- computes a dist_to_cbd_miles column for each tract by projecting to NJ State Plane (EPSG:3424), computing centroid distance to downtown Jersey City, and converting from feet to miles. merges this back into the main dataframe
- runs five OLS regressions, one per racial group, of the form: pct_change ~ C(train_access) + median_income_2010 + dist_to_cbd_miles, with near_neither as the reference category
- plots the treatment coefficients and 95% confidence intervals from those regressions as a horizontal dot-and-errorbar plot
- produces a formatted regression table with coefficients, standard errors, N, R-squared, and adjusted R-squared
- adjusts 2010 income, rent, and home values to 2020 dollars using the CPI ratio (approximately 1.187), computes change variables, and runs a mediation analysis for each of three mediators (income change, rent change, home value change) by re-running the five regressions with and without each mediator and comparing the resulting coefficients
- plots the mediation results as a 3x5 grid of bar charts showing coefficients before and after each mediator, colored by significance

**Outputs:**
- [outputs/hudsonrace1.png](outputs/hudsonrace1.png) - grouped bar chart of mean racial pct point change by transit group
- [outputs/race_pct_change_maps.png](outputs/race_pct_change_maps.png) - five choropleth maps of racial pct point change by tract
- [outputs/coefficient_plot_controlled.png](outputs/coefficient_plot_controlled.png) - OLS coefficient plot with 95% CIs
- [outputs/regression_table_minimal_v6.png](outputs/regression_table_minimal_v6.png) - formatted OLS results table
- [outputs/mediation_all_plot_v7.png](outputs/mediation_all_plot_v7.png) - mediation analysis bar chart grid
