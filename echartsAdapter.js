function formatData(jsonUrl) {
    return $.getJSON(jsonUrl).then(function (data) {
        let legendDataNames = [];
        let series = [];
        let xAxis = [];

        data.forEach(function (dataVal, index) {
            let formattedData = [];
            dataVal.series.forEach(function (val, key) {
                console.log(val);
                formattedData[key] = val.value;
                xAxis[key] = val.x;
            });
            legendDataNames[index] = dataVal.title_rus;
            series[index] = {
                name: dataVal.title_rus,
                type: 'bar',
                data: formattedData
            };

        });
        var returnData = {
            legendDataNames: legendDataNames,
            series: series,
            xAxis: xAxis,
        }
        console.log(returnData);
        return returnData;
    });
}