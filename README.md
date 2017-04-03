# IcedDrinks-Samples
A sample environment in which to play with the iced drinks

Three sample spreadsheets are available to copy to try the IcedDrinksLib. Steps are as follows:
1. Pull the IcedDrinksLib code into a Google Apps Script file and add the 2dLibrary and BetterLogger

2. Copy the tracker spreadsheet (1oC--z6qoAJPpNGq8GpaodYCeDk90ucnN3GoOWtXTxWs), go to Tools->Script Editor and pull down the code.gs from IcedDinks-Samples into that file.

3. Copy the Monday and Thursday build sheets (1GDwhF530qmeNNHVwKvr36IvjtuGu5IVd8LiYAKabXuE) and (1dw3HLoGTxLT4Jv0l_ec2mhjjR_yIwMKzFnxHuq0Wgeg)

4. grab the three new DocumentIds from the URL of the three copied spreadsheets and overwrite the three in the fileIds() function in the code.gs in the Tracker

5. re-load the tracker spreadsheet and the new menus should show up.

6. Make sure there is recent history info in the Build History sheet. If it is not recent, copy groups of 14 rows onto the end, altering their dates so that they have the same monday / thursday cadence. Dates are used as one of the selection criteria to to filter relecent rows so if the build groups do not have unique, ascending dates the algorithm will not work properly

7. Play around and see what happens. Lots more info is available in the IcedDrinksLib project
