ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32631").setExtent([373592.766443, 788784.581950, 396996.096512, 801930.183934]);
var wms_layers = [];

var format_Limite_abomey_0 = new ol.format.GeoJSON();
var features_Limite_abomey_0 = format_Limite_abomey_0.readFeatures(json_Limite_abomey_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Limite_abomey_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_abomey_0.addFeatures(features_Limite_abomey_0);
var lyr_Limite_abomey_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_abomey_0, 
                style: style_Limite_abomey_0,
                interactive: true,
                title: '<img src="styles/legend/Limite_abomey_0.png" /> Limite_abomey'
            });
var format_cour_eau_abomey_1 = new ol.format.GeoJSON();
var features_cour_eau_abomey_1 = format_cour_eau_abomey_1.readFeatures(json_cour_eau_abomey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_cour_eau_abomey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cour_eau_abomey_1.addFeatures(features_cour_eau_abomey_1);
var lyr_cour_eau_abomey_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cour_eau_abomey_1, 
                style: style_cour_eau_abomey_1,
                interactive: true,
    title: 'cour_eau_abomey<br />\
    <img src="styles/legend/cour_eau_abomey_1_0.png" /> FLEUVE<br />\
    <img src="styles/legend/cour_eau_abomey_1_1.png" /> RIVIERE<br />\
    <img src="styles/legend/cour_eau_abomey_1_2.png" /> <br />'
        });
var format_Education_2 = new ol.format.GeoJSON();
var features_Education_2 = format_Education_2.readFeatures(json_Education_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Education_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Education_2.addFeatures(features_Education_2);
var lyr_Education_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Education_2, 
                style: style_Education_2,
                interactive: true,
                title: '<img src="styles/legend/Education_2.png" /> Education'
            });
var format_Route_Abomey_3 = new ol.format.GeoJSON();
var features_Route_Abomey_3 = format_Route_Abomey_3.readFeatures(json_Route_Abomey_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Route_Abomey_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_Abomey_3.addFeatures(features_Route_Abomey_3);
var lyr_Route_Abomey_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_Abomey_3, 
                style: style_Route_Abomey_3,
                interactive: true,
    title: 'Route_Abomey<br />\
    <img src="styles/legend/Route_Abomey_3_0.png" /> BITUME<br />\
    <img src="styles/legend/Route_Abomey_3_1.png" /> NON_REVETU<br />\
    <img src="styles/legend/Route_Abomey_3_2.png" /> PAVE<br />\
    <img src="styles/legend/Route_Abomey_3_3.png" /> <br />'
        });
var format_Village_abomey_4 = new ol.format.GeoJSON();
var features_Village_abomey_4 = format_Village_abomey_4.readFeatures(json_Village_abomey_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Village_abomey_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Village_abomey_4.addFeatures(features_Village_abomey_4);
var lyr_Village_abomey_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Village_abomey_4, 
                style: style_Village_abomey_4,
                interactive: true,
                title: '<img src="styles/legend/Village_abomey_4.png" /> Village_abomey'
            });

lyr_Limite_abomey_0.setVisible(true);lyr_cour_eau_abomey_1.setVisible(true);lyr_Education_2.setVisible(true);lyr_Route_Abomey_3.setVisible(true);lyr_Village_abomey_4.setVisible(true);
var layersList = [lyr_Limite_abomey_0,lyr_cour_eau_abomey_1,lyr_Education_2,lyr_Route_Abomey_3,lyr_Village_abomey_4];
lyr_Limite_abomey_0.set('fieldAliases', {'nom_com': 'nom_com', 'population': 'population', 'code_com': 'code_com', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_cour_eau_abomey_1.set('fieldAliases', {'nom_ce': 'nom_ce', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_enq': 'nom_enq', 'autre_nom': 'autre_nom', 'type': 'type', 'regime': 'regime', 'arbres': 'arbres', 'source': 'source', 'nom_600k': 'nom_600k', 'shape_leng': 'shape_leng', 'trace': 'trace', });
lyr_Education_2.set('fieldAliases', {'type': 'type', 'source': 'source', 'nom_enc': 'nom_enc', 'remarque': 'remarque', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Route_Abomey_3.set('fieldAliases', {'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'revetement': 'revetement', 'praticab': 'praticab', 'chaussee_s': 'chaussee_s', 'voie_local': 'voie_local', 'franchisst': 'franchisst', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_Village_abomey_4.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', 'nom_enq': 'nom_enq', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_600k': 'nom_600k', 'nom_assemb': 'nom_assemb', 'nom_sbee': 'nom_sbee', 'nom_dgeau': 'nom_dgeau', 'nom_insae': 'nom_insae', 'autre_nom': 'autre_nom', 'gendarm': 'gendarm', 'police': 'police', 'pompiers': 'pompiers', 'douane': 'douane', 'hopital': 'hopital', 'autre_san': 'autre_san', 'code_geo': 'code_geo', 'source': 'source', 'ens_sup': 'ens_sup', 'ens_sec': 'ens_sec', 'marche': 'marche', 'poste': 'poste', 'population': 'population', });
lyr_Limite_abomey_0.set('fieldImages', {'nom_com': 'TextEdit', 'population': 'TextEdit', 'code_com': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_cour_eau_abomey_1.set('fieldImages', {'nom_ce': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_enq': 'TextEdit', 'autre_nom': 'TextEdit', 'type': 'TextEdit', 'regime': 'TextEdit', 'arbres': 'TextEdit', 'source': 'TextEdit', 'nom_600k': 'TextEdit', 'shape_leng': 'TextEdit', 'trace': 'TextEdit', });
lyr_Education_2.set('fieldImages', {'type': '', 'source': '', 'nom_enc': '', 'remarque': '', 'shape_leng': '', 'shape_area': '', });
lyr_Route_Abomey_3.set('fieldImages', {'num_route': 'TextEdit', 'type': 'TextEdit', 'cl_admin': 'TextEdit', 'revetement': 'TextEdit', 'praticab': 'TextEdit', 'chaussee_s': 'TextEdit', 'voie_local': 'TextEdit', 'franchisst': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Village_abomey_4.set('fieldImages', {'nom_loc': 'TextEdit', 'type': 'TextEdit', 'statut_adm': 'TextEdit', 'commune': 'TextEdit', 'arrondisst': 'TextEdit', 'village_ad': 'TextEdit', 'nom_enq': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_600k': 'TextEdit', 'nom_assemb': 'TextEdit', 'nom_sbee': 'TextEdit', 'nom_dgeau': 'TextEdit', 'nom_insae': 'TextEdit', 'autre_nom': 'TextEdit', 'gendarm': 'TextEdit', 'police': 'TextEdit', 'pompiers': 'TextEdit', 'douane': 'TextEdit', 'hopital': 'TextEdit', 'autre_san': 'TextEdit', 'code_geo': 'TextEdit', 'source': 'TextEdit', 'ens_sup': 'TextEdit', 'ens_sec': 'TextEdit', 'marche': 'TextEdit', 'poste': 'TextEdit', 'population': 'TextEdit', });
lyr_Limite_abomey_0.set('fieldLabels', {'nom_com': 'no label', 'population': 'no label', 'code_com': 'no label', 'source': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_cour_eau_abomey_1.set('fieldLabels', {'nom_ce': 'no label', 'nom_50k': 'no label', 'nom_200k': 'no label', 'nom_enq': 'no label', 'autre_nom': 'no label', 'type': 'no label', 'regime': 'no label', 'arbres': 'no label', 'source': 'no label', 'nom_600k': 'no label', 'shape_leng': 'no label', 'trace': 'no label', });
lyr_Education_2.set('fieldLabels', {'type': 'no label', 'source': 'no label', 'nom_enc': 'no label', 'remarque': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Route_Abomey_3.set('fieldLabels', {'num_route': 'no label', 'type': 'no label', 'cl_admin': 'no label', 'revetement': 'no label', 'praticab': 'no label', 'chaussee_s': 'no label', 'voie_local': 'no label', 'franchisst': 'no label', 'source': 'no label', 'shape_leng': 'no label', });
lyr_Village_abomey_4.set('fieldLabels', {'nom_loc': 'no label', 'type': 'no label', 'statut_adm': 'no label', 'commune': 'no label', 'arrondisst': 'no label', 'village_ad': 'no label', 'nom_enq': 'no label', 'nom_50k': 'no label', 'nom_200k': 'no label', 'nom_600k': 'no label', 'nom_assemb': 'no label', 'nom_sbee': 'no label', 'nom_dgeau': 'no label', 'nom_insae': 'no label', 'autre_nom': 'no label', 'gendarm': 'no label', 'police': 'no label', 'pompiers': 'no label', 'douane': 'no label', 'hopital': 'no label', 'autre_san': 'no label', 'code_geo': 'no label', 'source': 'no label', 'ens_sup': 'no label', 'ens_sec': 'no label', 'marche': 'no label', 'poste': 'no label', 'population': 'no label', });
lyr_Village_abomey_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});