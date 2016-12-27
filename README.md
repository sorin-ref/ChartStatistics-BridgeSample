# ChartStatistics-BridgeSample
Sample core logic to be used in a chart component or statistics application that leverages Bridge.net to convert C# to JavaScript and TypeScript definitions.

Projects:
 * StatisticsServices: business logic that computes an average value from a set of decimal values;
 * ChartServices: user interface facade services to generate 2D and 3D bar charts;
 * ChartController: component or application controller (that may be used from an actually bootstapped component or application) that uses StatisticsServices (business logic) and ChartServices (user interface facade services) on input data loaded using delegates (data access facade).