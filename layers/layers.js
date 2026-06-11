ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([473585.182556, 494953.433631, 482208.286556, 500204.597427]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimitaIntravilanMerghindeal_3 = new ol.format.GeoJSON();
var features_LimitaIntravilanMerghindeal_3 = format_LimitaIntravilanMerghindeal_3.readFeatures(json_LimitaIntravilanMerghindeal_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimitaIntravilanMerghindeal_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilanMerghindeal_3.addFeatures(features_LimitaIntravilanMerghindeal_3);
var lyr_LimitaIntravilanMerghindeal_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilanMerghindeal_3, 
                style: style_LimitaIntravilanMerghindeal_3,
                popuplayertitle: 'Limita Intravilan Merghindeal',
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilanMerghindeal_3.png" /> Limita Intravilan Merghindeal'
            });
var format_SVDAliniamentInfrastructura_4 = new ol.format.GeoJSON();
var features_SVDAliniamentInfrastructura_4 = format_SVDAliniamentInfrastructura_4.readFeatures(json_SVDAliniamentInfrastructura_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVDAliniamentInfrastructura_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVDAliniamentInfrastructura_4.addFeatures(features_SVDAliniamentInfrastructura_4);
var lyr_SVDAliniamentInfrastructura_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVDAliniamentInfrastructura_4, 
                style: style_SVDAliniamentInfrastructura_4,
                popuplayertitle: 'SVD-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVDAliniamentInfrastructura_4.png" /> SVD-Aliniament Infrastructura'
            });
var format_SVAliniamentInfrastructura_5 = new ol.format.GeoJSON();
var features_SVAliniamentInfrastructura_5 = format_SVAliniamentInfrastructura_5.readFeatures(json_SVAliniamentInfrastructura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamentInfrastructura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamentInfrastructura_5.addFeatures(features_SVAliniamentInfrastructura_5);
var lyr_SVAliniamentInfrastructura_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamentInfrastructura_5, 
                style: style_SVAliniamentInfrastructura_5,
                popuplayertitle: 'SV-Aliniament Infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamentInfrastructura_5.png" /> SV-Aliniament Infrastructura'
            });
var format_CopaciUATMerghindeal_6 = new ol.format.GeoJSON();
var features_CopaciUATMerghindeal_6 = format_CopaciUATMerghindeal_6.readFeatures(json_CopaciUATMerghindeal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciUATMerghindeal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciUATMerghindeal_6.addFeatures(features_CopaciUATMerghindeal_6);
var lyr_CopaciUATMerghindeal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciUATMerghindeal_6, 
                style: style_CopaciUATMerghindeal_6,
                popuplayertitle: 'Copaci UAT Merghindeal',
                interactive: true,
                title: '<img src="styles/legend/CopaciUATMerghindeal_6.png" /> Copaci UAT Merghindeal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LimitaIntravilanMerghindeal_3.setVisible(true);lyr_SVDAliniamentInfrastructura_4.setVisible(true);lyr_SVAliniamentInfrastructura_5.setVisible(true);lyr_CopaciUATMerghindeal_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_LimitaIntravilanMerghindeal_3,lyr_SVDAliniamentInfrastructura_4,lyr_SVAliniamentInfrastructura_5,lyr_CopaciUATMerghindeal_6];
lyr_LimitaIntravilanMerghindeal_3.set('fieldAliases', {'FID': 'FID', 'Localitate': 'Localitate', 'Supr.[ha]': 'Supr.[ha]', });
lyr_SVDAliniamentInfrastructura_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Localitate': 'Localitate', 'Supr.[mp]': 'Supr.[mp]', });
lyr_SVAliniamentInfrastructura_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Localitate': 'Localitate', 'Supr.[mp]': 'Supr.[mp]', });
lyr_CopaciUATMerghindeal_6.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', 'Localitate': 'Localitate', });
lyr_LimitaIntravilanMerghindeal_3.set('fieldImages', {'FID': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[ha]': 'TextEdit', });
lyr_SVDAliniamentInfrastructura_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_SVAliniamentInfrastructura_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Localitate': 'TextEdit', 'Supr.[mp]': 'TextEdit', });
lyr_CopaciUATMerghindeal_6.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_LimitaIntravilanMerghindeal_3.set('fieldLabels', {'FID': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[ha]': 'no label', });
lyr_SVDAliniamentInfrastructura_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_SVAliniamentInfrastructura_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', });
lyr_CopaciUATMerghindeal_6.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_CopaciUATMerghindeal_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});