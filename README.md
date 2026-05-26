# Order to run

1. [data_pullandclean.ipynb](https://github.com/RyAlah/QSS20_Alahyari_FinalProject/blob/main/code/data_pullandclean.ipynb)

- Takes in:
  - Two .csv files from the U.S. Census Bureau logging demographic makeup of census tracts in Hudson County, NJ from the 2010 and 2020 censuses respectively. The two datasets differ slightly; the 2020 dataset includes columns recording the percentage of population for each racial category, but the 2010 dataset only includes total numbers. 
  
- What it does:
  - Transposes the data tables so the census tracts are the row values. Fixes indices since the indices in both datasets were originally pulled as their own row.
  - For the 2020 dataset, each census tract has two rows, one with total numbers and one with percentages. The code drops all rows recording totals. For the 2010 dataset, the code uses the total population column (which records the total population in each tract) to calculate percent columns for each racial category we will be studying.
  - Uses regex to remove unnecessary characters from column names and to rename duplicate columns.
  - Unites separate Hispanic racial categories into one racial category.
  - Adds two boolean columns near_hblr and near_path that record whether a census tract is within walking distance of a PATH station or HBLR station.
  
- Outputs:
  - Two cleaned .csv files
    1. 2010cleaned.csv
    2. 2020cleaned.csv
  
2. [data_mergeandplot](https://github.com/RyAlah/QSS20_Alahyari_FinalProject/blob/main/code/data_mergeandplot.ipynb)

- Takes in:
  - Two cleaned .csv files
    1. 2010cleaned.csv
    2. 2020cleaned.csv
  
- What it does:
  - Creates tract_num column in each dataset, using regex to isolate the tract numbers from the census_tract column to allow for a common column to merge on (the census tract columns were originally slightly different for the two datasets and included additional string characters beyond just the tract number).
  - Conducts a left merge of 2010cleaned.csv with 2020cleaned.csv, merging on the new tract_num column. Appends _2010 and _2020 to columns from the two datasets that share the same name in order to differentiate demographic percentage columns from the 2010 and 2020 datasets.
  - Creates percentage point change columns for each racial category by taking the difference between each racial percent column from 2010 to 2020.
  - Creates a train_access column that unifies the near_hblr and near_path columns and has four categories: path_only, hblr_only, near_both, near_neither
  - Creates a bar plot grouping the mean percentage point change in each racial category from 2010-2020 for each train access category
 
- Outputs:
  - One preliminary plot graphic and one merged .csv file
    1. hudsonrace.png
    2. race_merged.csv
