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
  
2. [1_spatialmerge_loopcode.R](https://github.com/rebeccajohnson88/spatialanalysis_sec8study/blob/master/code/1_spatialmerge_loopcode.R)

- Takes in:
  - .RDS files created in step 1
  
- What it does:
  - Iterates through states and subsets to PHAs in that state
  - Uses `st_intersection` logic to find the overlap between tract polygons and PHA service area polygons
