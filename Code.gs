function fileIds()
{
  // trackerId, monday build Id, thursday build id
  return new IcedDrinksLib.getFileIds("1oC--z6qoAJPpNGq8GpaodYCeDk90ucnN3GoOWtXTxWs", "1GDwhF530qmeNNHVwKvr36IvjtuGu5IVd8LiYAKabXuE", "1dw3HLoGTxLT4Jv0l_ec2mhjjR_yIwMKzFnxHuq0Wgeg");
}

function generateMondayTargets()
{
  IcedDrinksLib.generateMondayTargets(fileIds())
}

function generateThursdayTargets()
{
  IcedDrinksLib.generateThursdayTargets(fileIds())
}

function generateBuildTargets()
{
  IcedDrinksLib.generateBuildTargets(fileIds())
}

function pushMondayTargets()
{
  IcedDrinksLib.pushMondayTargets(fileIds())
}

function pushThursdayTargets()
{
  IcedDrinksLib.pushThursdayTargets(fileIds())
}

function pushAllTargets()
{
  IcedDrinksLib.pushAllTargets(fileIds())
}

function logMondayBuild()
{
  IcedDrinksLib.logMondayBuild(fileIds())
}

function logThursdayBuild()
{
  IcedDrinksLib.logThursdayBuild(fileIds())
}

function onOpen() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var gEntries = [{
    name : "Generate Mon Targets",
    functionName : "generateMondayTargets"
  },
                 {
    name : "Generate Thurs Targets",
    functionName : "generateThursdayTargets"
  }];
  var pEntries = [{
    name : "Update Mon Build Sheet",
    functionName : "pushMondayTargets"
  },
                 {
    name : "Update Thurs Build Sheet",
    functionName : "pushThursdayTargets"
  }];
  spreadsheet.addMenu("Generate", gEntries);
  spreadsheet.addMenu("Push", pEntries);
};
