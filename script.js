window.onload = () => {
  const apiUrl = "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=Z2NvYjRIKpV9qkWIDNk0qYEXBSgvl%2BgrCyeFMg0VCY7xTTiiqmRR0o2szmp4emn7nODZzW2z0LW5BNsY6R5L%2FQ%3D%3D&returnType=json&numOfRows=125&pageNo=1&sidoName=%EA%B2%BD%EA%B8%B0&ver=1.0";

  fetch(apiUrl).then(response => response.json()).then(data => {
    const items = data.response.body.items;

    const item1 = items.find(e => e.stationName === "의정부동");
    // document.getElementById("so2Grade1").textContent = item.so2Grade1;
    // document.getElementById("coFlag1").textContent = item.coFlag1;
    // document.getElementById("khaiValue1").textContent = item.khaiValue1;
    document.getElementById("so2Value1").textContent = `아황산가스 평균농도: ${item1.so2Value}`;
    document.getElementById("coValue1").textContent = `일산화탄소 평균농도: ${item1.coValue}`;
    // document.getElementById("pm25Flag1").textContent = item.pm25Flag1;
    // document.getElementById("pm10Flag1").textContent = item.pm10Flag1;
    // document.getElementById("o3Grade1").textContent = item.o3Grade1;
    document.getElementById("pm10Value1").textContent = `미세먼지(PM10) 평균농도: ${item1.pm10Value}`;
    // document.getElementById("khaiGrade1").textContent = item.khaiGrade1;
    document.getElementById("pm25Value1").textContent = `미세먼지(PM25) 평균농도: ${item1.pm25Value}`;
    // document.getElementById("sidoName1").textContent = `시도명: ${item1.sidoName}`;
    // document.getElementById("no2Flag1").textContent = item.no2Flag1;
    // document.getElementById("no2Grade1").textContent = item.no2Grade1;
    // document.getElementById("o3Flag1").textContent = item.o3Flag1;
    // document.getElementById("pm25Grade1").textContent = item.pm25Grade1;
    // document.getElementById("so2Flag1").textContent = item.so2Flag1;
    document.getElementById("dataTime1").textContent = `측정일시: ${item1.dataTime}`;
    // document.getElementById("coGrade1").textContent = item.coGrade1;
    document.getElementById("no2Value1").textContent = `이산화질소 평균농도: ${item1.no2Value}`;
    // document.getElementById("stationName1").textContent = item.stationName1;
    // document.getElementById("pm10Grade1").textContent = item.pm10Grade1;
    document.getElementById("o3Value1").textContent = `오존 평균 농도: ${item1.o3Value}`;

    const item2 = items.find(e => e.stationName === "의정부1동");
    // document.getElementById("so2Grade2").textContent = item.so2Grade2;
    // document.getElementById("coFlag2").textContent = item.coFlag2;
    // document.getElementById("khaiValue2").textContent = item.khaiValue2;
    document.getElementById("so2Value2").textContent = `아황산가스 평균농도: ${item2.so2Value}`;
    document.getElementById("coValue2").textContent = `일산화탄소 평균농도: ${item2.coValue}`;
    // document.getElementById("pm25Flag2").textContent = item.pm25Flag2;
    // document.getElementById("pm10Flag2").textContent = item.pm10Flag2;
    // document.getElementById("o3Grade2").textContent = item.o3Grade2;
    document.getElementById("pm10Value2").textContent = `미세먼지(PM10) 평균농도: ${item2.pm10Value}`;
    // document.getElementById("khaiGrade2").textContent = item.khaiGrade2;
    document.getElementById("pm25Value2").textContent = `미세먼지(PM25) 평균농도: ${item2.pm25Value}`;
    // document.getElementById("sidoName2").textContent = `시도명: ${item2.sidoName}`;
    // document.getElementById("no2Flag2").textContent = item.no2Flag2;
    // document.getElementById("no2Grade2").textContent = item.no2Grade2;
    // document.getElementById("o3Flag2").textContent = item.o3Flag2;
    // document.getElementById("pm25Grade2").textContent = item.pm25Grade2;
    // document.getElementById("so2Flag2").textContent = item.so2Flag2;
    document.getElementById("dataTime2").textContent = `측정일시: ${item2.dataTime}`;
    // document.getElementById("coGrade2").textContent = item.coGrade2;
    document.getElementById("no2Value2").textContent = `이산화질소 평균농도: ${item2.no2Value}`;
    // document.getElementById("stationName2").textContent = item.stationName2;
    // document.getElementById("pm10Grade2").textContent = item.pm10Grade2;
    document.getElementById("o3Value2").textContent = `오존 평균 농도: ${item2.o3Value}`;

    const item3 = items.find(e => e.stationName === "송산3동");
    // document.getElementById("so2Grade3").textContent = item.so2Grade3;
    // document.getElementById("coFlag3").textContent = item.coFlag3;
    // document.getElementById("khaiValue3").textContent = item.khaiValue3;
    document.getElementById("so2Value3").textContent = `아황산가스 평균농도: ${item3.so2Value}`;
    document.getElementById("coValue3").textContent = `일산화탄소 평균농도: ${item3.coValue}`;
    // document.getElementById("pm25Flag3").textContent = item.pm25Flag3;
    // document.getElementById("pm10Flag3").textContent = item.pm10Flag3;
    // document.getElementById("o3Grade3").textContent = item.o3Grade3;
    document.getElementById("pm10Value3").textContent = `미세먼지(PM10) 평균농도: ${item3.pm10Value}`;
    // document.getElementById("khaiGrade3").textContent = item.khaiGrade3;
    document.getElementById("pm25Value3").textContent = `미세먼지(PM25) 평균농도: ${item3.pm25Value}`;
    // document.getElementById("sidoName3").textContent = `시도명: ${item3.sidoName}`;
    // document.getElementById("no2Flag3").textContent = item.no2Flag3;
    // document.getElementById("no2Grade3").textContent = item.no2Grade3;
    // document.getElementById("o3Flag3").textContent = item.o3Flag3;
    // document.getElementById("pm25Grade3").textContent = item.pm25Grade3;
    // document.getElementById("so2Flag3").textContent = item.so2Flag3;
    document.getElementById("dataTime3").textContent = `측정일시: ${item3.dataTime}`;
    // document.getElementById("coGrade3").textContent = item.coGrade3;
    document.getElementById("no2Value3").textContent = `이산화질소 평균농도: ${item3.no2Value}`;
    // document.getElementById("stationName3").textContent = item.stationName3;
    // document.getElementById("pm10Grade3").textContent = item.pm10Grade3;
    document.getElementById("o3Value3").textContent = `오존 평균 농도: ${item3.o3Value}`;
  }).catch(error => {
    console.error('에러 발생:', error);
  });
}