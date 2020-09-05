ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-85.827761, -18.502993, -57.880443, 0.724943]);
var wms_layers = [];

var format_Departamentos_0 = new ol.format.GeoJSON();
var features_Departamentos_0 = format_Departamentos_0.readFeatures(json_Departamentos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Departamentos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_0.addFeatures(features_Departamentos_0);
var lyr_Departamentos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_0, 
                style: style_Departamentos_0,
                interactive: true,
    title: 'Departamentos<br />\
    <img src="styles/legend/Departamentos_0_0.png" /> AMAZONAS<br />\
    <img src="styles/legend/Departamentos_0_1.png" /> ANCASH<br />\
    <img src="styles/legend/Departamentos_0_2.png" /> APURIMAC<br />\
    <img src="styles/legend/Departamentos_0_3.png" /> AREQUIPA<br />\
    <img src="styles/legend/Departamentos_0_4.png" /> AYACUCHO<br />\
    <img src="styles/legend/Departamentos_0_5.png" /> CAJAMARCA<br />\
    <img src="styles/legend/Departamentos_0_6.png" /> CALLAO<br />\
    <img src="styles/legend/Departamentos_0_7.png" /> CUSCO<br />\
    <img src="styles/legend/Departamentos_0_8.png" /> HUANCAVELICA<br />\
    <img src="styles/legend/Departamentos_0_9.png" /> HUANUCO<br />\
    <img src="styles/legend/Departamentos_0_10.png" /> ICA<br />\
    <img src="styles/legend/Departamentos_0_11.png" /> JUNIN<br />\
    <img src="styles/legend/Departamentos_0_12.png" /> LA LIBERTAD<br />\
    <img src="styles/legend/Departamentos_0_13.png" /> LAMBAYEQUE<br />\
    <img src="styles/legend/Departamentos_0_14.png" /> LIMA<br />\
    <img src="styles/legend/Departamentos_0_15.png" /> LORETO<br />\
    <img src="styles/legend/Departamentos_0_16.png" /> MADRE DE DIOS<br />\
    <img src="styles/legend/Departamentos_0_17.png" /> MOQUEGUA<br />\
    <img src="styles/legend/Departamentos_0_18.png" /> PASCO<br />\
    <img src="styles/legend/Departamentos_0_19.png" /> PIURA<br />\
    <img src="styles/legend/Departamentos_0_20.png" /> PUNO<br />\
    <img src="styles/legend/Departamentos_0_21.png" /> SAN MARTIN<br />\
    <img src="styles/legend/Departamentos_0_22.png" /> TACNA<br />\
    <img src="styles/legend/Departamentos_0_23.png" /> TUMBES<br />\
    <img src="styles/legend/Departamentos_0_24.png" /> UCAYALI<br />\
    <img src="styles/legend/Departamentos_0_25.png" /> <br />'
        });

lyr_Departamentos_0.setVisible(true);
var layersList = [lyr_Departamentos_0];
lyr_Departamentos_0.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'NOMBDPTO': 'NOMBDPTO', 'CAPITAL': 'CAPITAL', });
lyr_Departamentos_0.set('fieldImages', {'IDDPTO': 'Hidden', 'NOMBDPTO': 'TextEdit', 'CAPITAL': 'Hidden', });
lyr_Departamentos_0.set('fieldLabels', {'NOMBDPTO': 'header label', });
lyr_Departamentos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});