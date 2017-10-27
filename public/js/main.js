// 'use strict';


var app = angular.module('hoteljotApp',[
			'ngAnimate',
			'ngMaterial',
			'ngRoute',
			'LocalStorageModule',
			'ngMdIcons'	,
			'ngFileUpload',
			'angularjs-datetime-picker',	
			'ui.bootstrap',	
			'ngSanitize',
			'angular-nicescroll',
			'cp.ngConfirm',
			'vAccordion',
			'ngCookies',
			//'rzModule',
			])

.config(['localStorageServiceProvider',
	function (localStorageServiceProvider) {
	  	localStorageServiceProvider
	    .setPrefix('hoteljotApp');
	}
]);

app.run(['$log',function($log){
	$log.info("Application is running");
}]);
window.countryList = new Array("Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");


var s_a = [];
s_a[0] = "";
s_a[1] = "Badakhshan|Badghis|Baghlan|Balkh|Bamian|Farah|Faryab|Ghazni|Ghowr|Helmand|Herat|Jowzjan|Kabol|Kandahar|Kapisa|Konar|Kondoz|Laghman|Lowgar|Nangarhar|Nimruz|Oruzgan|Paktia|Paktika|Parvan|Samangan|Sar-e Pol|Takhar|Vardak|Zabol";
s_a[2] = "Berat|Bulqize|Delvine|Devoll (Bilisht)|Diber (Peshkopi)|Durres|Elbasan|Fier|Gjirokaster|Gramsh|Has (Krume)|Kavaje|Kolonje (Erseke)|Korce|Kruje|Kucove|Kukes|Kurbin|Lezhe|Librazhd|Lushnje|Malesi e Madhe (Koplik)|Mallakaster (Ballsh)|Mat (Burrel)|Mirdite (Rreshen)|Peqin|Permet|Pogradec|Puke|Sarande|Shkoder|Skrapar (Corovode)|Tepelene|Tirane (Tirana)|Tropoje (Bajram Curri)|Vlore";
s_a[3] = "Adrar|Ain Defla|Ain Temouchent|Alger|Annaba|Batna|Bechar|Bejaia|Biskra|Blida|Bordj Bou Arreridj|Bouira|Boumerdes|Chlef|Constantine|Djelfa|El Bayadh|El Oued|El Tarf|Ghardaia|Guelma|Illizi|Jijel|Khenchela|Laghouat|M'Sila|Mascara|Medea|Mila|Mostaganem|Naama|Oran|Ouargla|Oum el Bouaghi|Relizane|Saida|Setif|Sidi Bel Abbes|Skikda|Souk Ahras|Tamanghasset|Tebessa|Tiaret|Tindouf|Tipaza|Tissemsilt|Tizi Ouzou|Tlemcen";
s_a[4] = "Eastern|Manu'a|Rose Island|Swains Island|Western";
s_a[5] = "Andorra la Vella|Bengo|Benguela|Bie|Cabinda|Canillo|Cuando Cubango|Cuanza Norte|Cuanza Sul|Cunene|Encamp|Escaldes-Engordany|Huambo|Huila|La Massana|Luanda|Lunda Norte|Lunda Sul|Malanje|Moxico|Namibe|Ordino|Sant Julia de Loria|Uige|Zaire";
s_a[6] = "Anguilla";
s_a[7] = "Antartica";
s_a[8] = "Barbuda|Redonda|Saint George|Saint John|Saint Mary|Saint Paul|Saint Peter|Saint Philip";
s_a[9] = "Antartica e Islas del Atlantico Sur|Buenos Aires|Buenos Aires Capital Federal|Catamarca|Chaco|Chubut|Cordoba|Corrientes|Entre Rios|Formosa|Jujuy|La Pampa|La Rioja|Mendoza|Misiones|Neuquen|Rio Negro|Salta|San Juan|San Luis|Santa Cruz|Santa Fe|Santiago del Estero|Tierra del Fuego|Tucuman";
s_a[10] = "Aragatsotn|Ararat|Armavir|Geghark'unik'|Kotayk'|Lorri|Shirak|Syunik'|Tavush|Vayots' Dzor|Yerevan";
s_a[11] = "Aruba";
s_a[12] = "Ashmore and Cartier Island";
s_a[13] = "Australian Capital Territory|New South Wales|Northern Territory|Queensland|South Australia|Tasmania|Victoria|Western Australia";
s_a[14] = "Burgenland|Kaernten|Niederoesterreich|Oberoesterreich|Salzburg|Steiermark|Tirol|Vorarlberg|Wien";
s_a[15] = "Abseron Rayonu|Agcabadi Rayonu|Agdam Rayonu|Agdas Rayonu|Agstafa Rayonu|Agsu Rayonu|Ali Bayramli Sahari|Astara Rayonu|Baki Sahari|Balakan Rayonu|Barda Rayonu|Beylaqan Rayonu|Bilasuvar Rayonu|Cabrayil Rayonu|Calilabad Rayonu|Daskasan Rayonu|Davaci Rayonu|Fuzuli Rayonu|Gadabay Rayonu|Ganca Sahari|Goranboy Rayonu|Goycay Rayonu|Haciqabul Rayonu|Imisli Rayonu|Ismayilli Rayonu|Kalbacar Rayonu|Kurdamir Rayonu|Lacin Rayonu|Lankaran Rayonu|Lankaran Sahari|Lerik Rayonu|Masalli Rayonu|Mingacevir Sahari|Naftalan Sahari|Naxcivan Muxtar Respublikasi|Neftcala Rayonu|Oguz Rayonu|Qabala Rayonu|Qax Rayonu|Qazax Rayonu|Qobustan Rayonu|Quba Rayonu|Qubadli Rayonu|Qusar Rayonu|Saatli Rayonu|Sabirabad Rayonu|Saki Rayonu|Saki Sahari|Salyan Rayonu|Samaxi Rayonu|Samkir Rayonu|Samux Rayonu|Siyazan Rayonu|Sumqayit Sahari|Susa Rayonu|Susa Sahari|Tartar Rayonu|Tovuz Rayonu|Ucar Rayonu|Xacmaz Rayonu|Xankandi Sahari|Xanlar Rayonu|Xizi Rayonu|Xocali Rayonu|Xocavand Rayonu|Yardimli Rayonu|Yevlax Rayonu|Yevlax Sahari|Zangilan Rayonu|Zaqatala Rayonu|Zardab Rayonu";
s_a[16] = "Acklins and Crooked Islands|Bimini|Cat Island|Exuma|Freeport|Fresh Creek|Governor's Harbour|Green Turtle Cay|Harbour Island|High Rock|Inagua|Kemps Bay|Long Island|Marsh Harbour|Mayaguana|New Providence|Nicholls Town and Berry Islands|Ragged Island|Rock Sound|San Salvador and Rum Cay|Sandy Point";
s_a[17] = "Al Hadd|Al Manamah|Al Mintaqah al Gharbiyah|Al Mintaqah al Wusta|Al Mintaqah ash Shamaliyah|Al Muharraq|Ar Rifa' wa al Mintaqah al Janubiyah|Jidd Hafs|Juzur Hawar|Madinat 'Isa|Madinat Hamad|Sitrah";
s_a[18] = "Barguna|Barisal|Bhola|Jhalokati|Patuakhali|Pirojpur|Bandarban|Brahmanbaria|Chandpur|Chittagong|Comilla|Cox's Bazar|Feni|Khagrachari|Lakshmipur|Noakhali|Rangamati|Dhaka|Faridpur|Gazipur|Gopalganj|Jamalpur|Kishoreganj|Madaripur|Manikganj|Munshiganj|Mymensingh|Narayanganj|Narsingdi|Netrokona|Rajbari|Shariatpur|Sherpur|Tangail|Bagerhat|Chuadanga|Jessore|Jhenaidah|Khulna|Kushtia|Magura|Meherpur|Narail|Satkhira|Bogra|Dinajpur|Gaibandha|Jaipurhat|Kurigram|Lalmonirhat|Naogaon|Natore|Nawabganj|Nilphamari|Pabna|Panchagarh|Rajshahi|Rangpur|Sirajganj|Thakurgaon|Habiganj|Maulvi bazar|Sunamganj|Sylhet";
s_a[19] = "Bridgetown|Christ Church|Saint Andrew|Saint George|Saint James|Saint John|Saint Joseph|Saint Lucy|Saint Michael|Saint Peter|Saint Philip|Saint Thomas";
s_a[20] = "Brestskaya (Brest)|Homyel'skaya (Homyel')|Horad Minsk|Hrodzyenskaya (Hrodna)|Mahilyowskaya (Mahilyow)|Minskaya|Vitsyebskaya (Vitsyebsk)";
s_a[21] = "Antwerpen|Brabant Wallon|Brussels Capitol Region|Hainaut|Liege|Limburg|Luxembourg|Namur|Oost-Vlaanderen|Vlaams Brabant|West-Vlaanderen";
s_a[22] = "Belize|Cayo|Corozal|Orange Walk|Stann Creek|Toledo";
s_a[23] = "Alibori|Atakora|Atlantique|Borgou|Collines|Couffo|Donga|Littoral|Mono|Oueme|Plateau|Zou";
s_a[24] = "Devonshire|Hamilton|Hamilton|Paget|Pembroke|Saint George|Saint Georges|Sandys|Smiths|Southampton|Warwick";
s_a[25] = "Bumthang|Chhukha|Chirang|Daga|Geylegphug|Ha|Lhuntshi|Mongar|Paro|Pemagatsel|Punakha|Samchi|Samdrup Jongkhar|Shemgang|Tashigang|Thimphu|Tongsa|Wangdi Phodrang";
s_a[26] = "Beni|Chuquisaca|Cochabamba|La Paz|Oruro|Pando|Potosi|Santa Cruz|Tarija";
s_a[27] = "Federation of Bosnia and Herzegovina|Republika Srpska";
s_a[28] = "Central|Chobe|Francistown|Gaborone|Ghanzi|Kgalagadi|Kgatleng|Kweneng|Lobatse|Ngamiland|North-East|Selebi-Pikwe|South-East|Southern";
s_a[29] = "Acre|Alagoas|Amapa|Amazonas|Bahia|Ceara|Distrito Federal|Espirito Santo|Goias|Maranhao|Mato Grosso|Mato Grosso do Sul|Minas Gerais|Para|Paraiba|Parana|Pernambuco|Piaui|Rio de Janeiro|Rio Grande do Norte|Rio Grande do Sul|Rondonia|Roraima|Santa Catarina|Sao Paulo|Sergipe|Tocantins";
s_a[30] = "Anegada|Jost Van Dyke|Tortola|Virgin Gorda";
s_a[31] = "Belait|Brunei and Muara|Temburong|Tutong";
s_a[32] = "Blagoevgrad|Burgas|Dobrich|Gabrovo|Khaskovo|Kurdzhali|Kyustendil|Lovech|Montana|Pazardzhik|Pernik|Pleven|Plovdiv|Razgrad|Ruse|Shumen|Silistra|Sliven|Smolyan|Sofiya|Sofiya-Grad|Stara Zagora|Turgovishte|Varna|Veliko Turnovo|Vidin|Vratsa|Yambol";
s_a[33] = "Bale|Bam|Banwa|Bazega|Bougouriba|Boulgou|Boulkiemde|Comoe|Ganzourgou|Gnagna|Gourma|Houet|Ioba|Kadiogo|Kenedougou|Komandjari|Kompienga|Kossi|Koupelogo|Kouritenga|Kourweogo|Leraba|Loroum|Mouhoun|Nahouri|Namentenga|Naumbiel|Nayala|Oubritenga|Oudalan|Passore|Poni|Samentenga|Sanguie|Seno|Sissili|Soum|Sourou|Tapoa|Tuy|Yagha|Yatenga|Ziro|Zondomo|Zoundweogo";
s_a[34] = "Ayeyarwady|Bago|Chin State|Kachin State|Kayah State|Kayin State|Magway|Mandalay|Mon State|Rakhine State|Sagaing|Shan State|Tanintharyi|Yangon";
s_a[35] = "Bubanza|Bujumbura|Bururi|Cankuzo|Cibitoke|Gitega|Karuzi|Kayanza|Kirundo|Makamba|Muramvya|Muyinga|Mwaro|Ngozi|Rutana|Ruyigi";
s_a[36] = "Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Phnum Penh|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev";
s_a[37] = "Adamaoua|Centre|Est|Extreme-Nord|Littoral|Nord|Nord-Ouest|Ouest|Sud|Sud-Ouest";
s_a[38] = "Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory";
s_a[39] = "Boa Vista|Brava|Maio|Mosteiros|Paul|Porto Novo|Praia|Ribeira Grande|Sal|Santa Catarina|Santa Cruz|Sao Domingos|Sao Filipe|Sao Nicolau|Sao Vicente|Tarrafal";
s_a[40] = "Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western";
s_a[41] = "Bamingui-Bangoran|Bangui|Basse-Kotto|Gribingui|Haut-Mbomou|Haute-Kotto|Haute-Sangha|Kemo-Gribingui|Lobaye|Mbomou|Nana-Mambere|Ombella-Mpoko|Ouaka|Ouham|Ouham-Pende|Sangha|Vakaga";
s_a[42] = "Batha|Biltine|Borkou-Ennedi-Tibesti|Chari-Baguirmi|Guera|Kanem|Lac|Logone Occidental|Logone Oriental|Mayo-Kebbi|Moyen-Chari|Ouaddai|Salamat|Tandjile";
s_a[43] = "Aisen del General Carlos Ibanez del Campo|Antofagasta|Araucania|Atacama|Bio-Bio|Coquimbo|Libertador General Bernardo O'Higgins|Los Lagos|Magallanes y de la Antartica Chilena|Maule|Region Metropolitana (Santiago)|Tarapaca|Valparaiso";
s_a[44] = "Anhui|Beijing|Chongqing|Fujian|Gansu|Guangdong|Guangxi|Guizhou|Hainan|Hebei|Heilongjiang|Henan|Hubei|Hunan|Jiangsu|Jiangxi|Jilin|Liaoning|Nei Mongol|Ningxia|Qinghai|Shaanxi|Shandong|Shanghai|Shanxi|Sichuan|Tianjin|Xinjiang|Xizang (Tibet)|Yunnan|Zhejiang";
s_a[45] = "Christmas Island";
s_a[46] = "Clipperton Island";
s_a[47] = "Direction Island|Home Island|Horsburgh Island|North Keeling Island|South Island|West Island";
s_a[48] = "Amazonas|Antioquia|Arauca|Atlantico|Bolivar|Boyaca|Caldas|Caqueta|Casanare|Cauca|Cesar|Choco|Cordoba|Cundinamarca|Distrito Capital de Santa Fe de Bogota|Guainia|Guaviare|Huila|La Guajira|Magdalena|Meta|Narino|Norte de Santander|Putumayo|Quindio|Risaralda|San Andres y Providencia|Santander|Sucre|Tolima|Valle del Cauca|Vaupes|Vichada";
// <!-- -->
s_a[49] = "Anjouan (Nzwani)|Domoni|Fomboni|Grande Comore (Njazidja)|Moheli (Mwali)|Moroni|Moutsamoudou";
s_a[50] = "Bandundu|Bas-Congo|Equateur|Kasai-Occidental|Kasai-Oriental|Katanga|Kinshasa|Maniema|Nord-Kivu|Orientale|Sud-Kivu";
s_a[51] = "Bouenza|Brazzaville|Cuvette|Kouilou|Lekoumou|Likouala|Niari|Plateaux|Pool|Sangha";
s_a[52] = "Aitutaki|Atiu|Avarua|Mangaia|Manihiki|Manuae|Mauke|Mitiaro|Nassau Island|Palmerston|Penrhyn|Pukapuka|Rakahanga|Rarotonga|Suwarrow|Takutea";
s_a[53] = "Alajuela|Cartago|Guanacaste|Heredia|Limon|Puntarenas|San Jose";
s_a[54] = "Abengourou|Abidjan|Aboisso|Adiake'|Adzope|Agboville|Agnibilekrou|Ale'pe'|Bangolo|Beoumi|Biankouma|Bocanda|Bondoukou|Bongouanou|Bouafle|Bouake|Bouna|Boundiali|Dabakala|Dabon|Daloa|Danane|Daoukro|Dimbokro|Divo|Duekoue|Ferkessedougou|Gagnoa|Grand Bassam|Grand-Lahou|Guiglo|Issia|Jacqueville|Katiola|Korhogo|Lakota|Man|Mankono|Mbahiakro|Odienne|Oume|Sakassou|San-Pedro|Sassandra|Seguela|Sinfra|Soubre|Tabou|Tanda|Tiassale|Tiebissou|Tingrela|Touba|Toulepleu|Toumodi|Vavoua|Yamoussoukro|Zuenoula";
s_a[55] = "Bjelovarsko-Bilogorska Zupanija|Brodsko-Posavska Zupanija|Dubrovacko-Neretvanska Zupanija|Istarska Zupanija|Karlovacka Zupanija|Koprivnicko-Krizevacka Zupanija|Krapinsko-Zagorska Zupanija|Licko-Senjska Zupanija|Medimurska Zupanija|Osjecko-Baranjska Zupanija|Pozesko-Slavonska Zupanija|Primorsko-Goranska Zupanija|Sibensko-Kninska Zupanija|Sisacko-Moslavacka Zupanija|Splitsko-Dalmatinska Zupanija|Varazdinska Zupanija|Viroviticko-Podravska Zupanija|Vukovarsko-Srijemska Zupanija|Zadarska Zupanija|Zagreb|Zagrebacka Zupanija";
s_a[56] = "Camaguey|Ciego de Avila|Cienfuegos|Ciudad de La Habana|Granma|Guantanamo|Holguin|Isla de la Juventud|La Habana|Las Tunas|Matanzas|Pinar del Rio|Sancti Spiritus|Santiago de Cuba|Villa Clara";
s_a[57] = "Famagusta|Kyrenia|Larnaca|Limassol|Nicosia|Paphos";
s_a[58] = "Brnensky|Budejovicky|Jihlavsky|Karlovarsky|Kralovehradecky|Liberecky|Olomoucky|Ostravsky|Pardubicky|Plzensky|Praha|Stredocesky|Ustecky|Zlinsky";
s_a[59] = "Arhus|Bornholm|Fredericksberg|Frederiksborg|Fyn|Kobenhavn|Kobenhavns|Nordjylland|Ribe|Ringkobing|Roskilde|Sonderjylland|Storstrom|Vejle|Vestsjalland|Viborg";
s_a[60] = "'Ali Sabih|Dikhil|Djibouti|Obock|Tadjoura";
s_a[61] = "Saint Andrew|Saint David|Saint George|Saint John|Saint Joseph|Saint Luke|Saint Mark|Saint Patrick|Saint Paul|Saint Peter";
s_a[62] = "Azua|Baoruco|Barahona|Dajabon|Distrito Nacional|Duarte|El Seibo|Elias Pina|Espaillat|Hato Mayor|Independencia|La Altagracia|La Romana|La Vega|Maria Trinidad Sanchez|Monsenor Nouel|Monte Cristi|Monte Plata|Pedernales|Peravia|Puerto Plata|Salcedo|Samana|San Cristobal|San Juan|San Pedro de Macoris|Sanchez Ramirez|Santiago|Santiago Rodriguez|Valverde";
// <!-- -->
s_a[63] = "Azuay|Bolivar|Canar|Carchi|Chimborazo|Cotopaxi|El Oro|Esmeraldas|Galapagos|Guayas|Imbabura|Loja|Los Rios|Manabi|Morona-Santiago|Napo|Orellana|Pastaza|Pichincha|Sucumbios|Tungurahua|Zamora-Chinchipe";
s_a[64] = "Ad Daqahliyah|Al Bahr al Ahmar|Al Buhayrah|Al Fayyum|Al Gharbiyah|Al Iskandariyah|Al Isma'iliyah|Al Jizah|Al Minufiyah|Al Minya|Al Qahirah|Al Qalyubiyah|Al Wadi al Jadid|As Suways|Ash Sharqiyah|Aswan|Asyut|Bani Suwayf|Bur Sa'id|Dumyat|Janub Sina'|Kafr ash Shaykh|Matruh|Qina|Shamal Sina'|Suhaj";
s_a[65] = "Ahuachapan|Cabanas|Chalatenango|Cuscatlan|La Libertad|La Paz|La Union|Morazan|San Miguel|San Salvador|San Vicente|Santa Ana|Sonsonate|Usulutan";
s_a[66] = "Annobon|Bioko Norte|Bioko Sur|Centro Sur|Kie-Ntem|Litoral|Wele-Nzas";
s_a[67] = "Akale Guzay|Barka|Denkel|Hamasen|Sahil|Semhar|Senhit|Seraye";

s_a[68] = "Harjumaa (Tallinn)|Hiiumaa (Kardla)|Ida-Virumaa (Johvi)|Jarvamaa (Paide)|Jogevamaa (Jogeva)|Laane-Virumaa (Rakvere)|Laanemaa (Haapsalu)|Parnumaa (Parnu)|Polvamaa (Polva)|Raplamaa (Rapla)|Saaremaa (Kuessaare)|Tartumaa (Tartu)|Valgamaa (Valga)|Viljandimaa (Viljandi)|Vorumaa (Voru)";

s_a[69] = "Adis Abeba (Addis Ababa)|Afar|Amara|Dire Dawa|Gambela Hizboch|Hareri Hizb|Oromiya|Sumale|Tigray|YeDebub Biheroch Bihereseboch na Hizboch";

s_a[70] = "Europa Island";
s_a[71] = "Falkland Islands (Islas Malvinas)";
s_a[72] = "Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar";
s_a[73] = "Central|Eastern|Northern|Rotuma|Western";
s_a[74] = "Aland|Etela-Suomen Laani|Ita-Suomen Laani|Lansi-Suomen Laani|Lappi|Oulun Laani";
s_a[75] = "Alsace|Aquitaine|Auvergne|Basse-Normandie|Bourgogne|Bretagne|Centre|Champagne-Ardenne|Corse|Franche-Comte|Haute-Normandie|Ile-de-France|Languedoc-Roussillon|Limousin|Lorraine|Midi-Pyrenees|Nord-Pas-de-Calais|Pays de la Loire|Picardie|Poitou-Charentes|Provence-Alpes-Cote d'Azur|Rhone-Alpes";
s_a[76] = "French Guiana";
s_a[77] = "Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent";
s_a[78] = "Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam";
s_a[79] = "Estuaire|Haut-Ogooue|Moyen-Ogooue|Ngounie|Nyanga|Ogooue-Ivindo|Ogooue-Lolo|Ogooue-Maritime|Woleu-Ntem";
s_a[80] = "Banjul|Central River|Lower River|North Bank|Upper River|Western";
s_a[81] = "Gaza Strip";
s_a[82] = "Abashis|Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)|Adigenis|Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)|Akhalgoris|Akhalk'alak'is|Akhalts'ikhis|Akhmetis|Ambrolauris|Aspindzis|Baghdat'is|Bolnisis|Borjomis|Ch'khorotsqus|Ch'okhatauris|Chiat'ura|Dedop'listsqaros|Dmanisis|Dushet'is|Gardabanis|Gori|Goris|Gurjaanis|Javis|K'arelis|K'ut'aisi|Kaspis|Kharagaulis|Khashuris|Khobis|Khonis|Lagodekhis|Lanch'khut'is|Lentekhis|Marneulis|Martvilis|Mestiis|Mts'khet'is|Ninotsmindis|Onis|Ozurget'is|P'ot'i|Qazbegis|Qvarlis|Rust'avi|Sach'kheris|Sagarejos|Samtrediis|Senakis|Sighnaghis|T'bilisi|T'elavis|T'erjolis|T'et'ritsqaros|T'ianet'is|Tqibuli|Ts'ageris|Tsalenjikhis|Tsalkis|Tsqaltubo|Vanis|Zestap'onis|Zugdidi|Zugdidis";
s_a[83] = "Baden-Wuerttemberg|Bayern|Berlin|Brandenburg|Bremen|Hamburg|Hessen|Mecklenburg-Vorpommern|Niedersachsen|Nordrhein-Westfalen|Rheinland-Pfalz|Saarland|Sachsen|Sachsen-Anhalt|Schleswig-Holstein|Thueringen";
s_a[84] = "Ashanti|Brong-Ahafo|Central|Eastern|Greater Accra|Northern|Upper East|Upper West|Volta|Western";
s_a[85] = "Gibraltar";
s_a[86] = "Ile du Lys|Ile Glorieuse";
s_a[87] = "Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos";
s_a[88] = "Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)";
s_a[89] = "Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick";
s_a[90] = "Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante";
s_a[91] = "Guam";
s_a[92] = "Alta Verapaz|Baja Verapaz|Chimaltenango|Chiquimula|El Progreso|Escuintla|Guatemala|Huehuetenango|Izabal|Jalapa|Jutiapa|Peten|Quetzaltenango|Quiche|Retalhuleu|Sacatepequez|San Marcos|Santa Rosa|Solola|Suchitepequez|Totonicapan|Zacapa";
s_a[93] = "Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale";
s_a[94] = "Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou";
s_a[95] = "Bafata|Biombo|Bissau|Bolama-Bijagos|Cacheu|Gabu|Oio|Quinara|Tombali";
s_a[96] = "Barima-Waini|Cuyuni-Mazaruni|Demerara-Mahaica|East Berbice-Corentyne|Essequibo Islands-West Demerara|Mahaica-Berbice|Pomeroon-Supenaam|Potaro-Siparuni|Upper Demerara-Berbice|Upper Takutu-Upper Essequibo";
s_a[97] = "Artibonite|Centre|Grand'Anse|Nord|Nord-Est|Nord-Ouest|Ouest|Sud|Sud-Est";
s_a[98] = "Heard Island and McDonald Islands";
s_a[99] = "Holy See (Vatican City)";
s_a[100] = "Atlantida|Choluteca|Colon|Comayagua|Copan|Cortes|El Paraiso|Francisco Morazan|Gracias a Dios|Intibuca|Islas de la Bahia|La Paz|Lempira|Ocotepeque|Olancho|Santa Barbara|Valle|Yoro";
s_a[101] = "Hong Kong";
s_a[102] = "Howland Island";
s_a[103] = "Bacs-Kiskun|Baranya|Bekes|Bekescsaba|Borsod-Abauj-Zemplen|Budapest|Csongrad|Debrecen|Dunaujvaros|Eger|Fejer|Gyor|Gyor-Moson-Sopron|Hajdu-Bihar|Heves|Hodmezovasarhely|Jasz-Nagykun-Szolnok|Kaposvar|Kecskemet|Komarom-Esztergom|Miskolc|Nagykanizsa|Nograd|Nyiregyhaza|Pecs|Pest|Somogy|Sopron|Szabolcs-Szatmar-Bereg|Szeged|Szekesfehervar|Szolnok|Szombathely|Tatabanya|Tolna|Vas|Veszprem|Veszprem|Zala|Zalaegerszeg";
s_a[104] = "Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla";
s_a[105] = "Andaman and Nicobar Islands|Andhra Pradesh|Arunachal Pradesh|Assam|Bihar|Chandigarh|Chhattisgarh|Dadra and Nagar Haveli|Daman and Diu|Delhi|Goa|Gujarat|Haryana|Himachal Pradesh|Jammu and Kashmir|Jharkhand|Karnataka|Kerala|Lakshadweep|Madhya Pradesh|Maharashtra|Manipur|Meghalaya|Mizoram|Nagaland|Orissa|Pondicherry|Punjab|Rajasthan|Sikkim|Tamil Nadu|Tripura|Uttar Pradesh|Uttaranchal|West Bengal";
s_a[106] = "Aceh|Bali|Banten|Bengkulu|East Timor|Gorontalo|Irian Jaya|Jakarta Raya|Jambi|Jawa Barat|Jawa Tengah|Jawa Timur|Kalimantan Barat|Kalimantan Selatan|Kalimantan Tengah|Kalimantan Timur|Kepulauan Bangka Belitung|Lampung|Maluku|Maluku Utara|Nusa Tenggara Barat|Nusa Tenggara Timur|Riau|Sulawesi Selatan|Sulawesi Tengah|Sulawesi Tenggara|Sulawesi Utara|Sumatera Barat|Sumatera Selatan|Sumatera Utara|Yogyakarta";
s_a[107] = "Ardabil|Azarbayjan-e Gharbi|Azarbayjan-e Sharqi|Bushehr|Chahar Mahall va Bakhtiari|Esfahan|Fars|Gilan|Golestan|Hamadan|Hormozgan|Ilam|Kerman|Kermanshah|Khorasan|Khuzestan|Kohgiluyeh va Buyer Ahmad|Kordestan|Lorestan|Markazi|Mazandaran|Qazvin|Qom|Semnan|Sistan va Baluchestan|Tehran|Yazd|Zanjan";
s_a[108] = "Al Anbar|Al Basrah|Al Muthanna|Al Qadisiyah|An Najaf|Arbil|As Sulaymaniyah|At Ta'mim|Babil|Baghdad|Dahuk|Dhi Qar|Diyala|Karbala'|Maysan|Ninawa|Salah ad Din|Wasit";
s_a[109] = "Carlow|Cavan|Clare|Cork|Donegal|Dublin|Galway|Kerry|Kildare|Kilkenny|Laois|Leitrim|Limerick|Longford|Louth|Mayo|Meath|Monaghan|Offaly|Roscommon|Sligo|Tipperary|Waterford|Westmeath|Wexford|Wicklow";
s_a[110] = "Antrim|Ards|Armagh|Ballymena|Ballymoney|Banbridge|Belfast|Carrickfergus|Castlereagh|Coleraine|Cookstown|Craigavon|Derry|Down|Dungannon|Fermanagh|Larne|Limavady|Lisburn|Magherafelt|Moyle|Newry and Mourne|Newtownabbey|North Down|Omagh|Strabane";
s_a[111] = "Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv";
s_a[112] = "Abruzzo|Basilicata|Calabria|Campania|Emilia-Romagna|Friuli-Venezia Giulia|Lazio|Liguria|Lombardia|Marche|Molise|Piemonte|Puglia|Sardegna|Sicilia|Toscana|Trentino-Alto Adige|Umbria|Valle d'Aosta|Veneto";
s_a[113] = "Clarendon|Hanover|Kingston|Manchester|Portland|Saint Andrew|Saint Ann|Saint Catherine|Saint Elizabeth|Saint James|Saint Mary|Saint Thomas|Trelawny|Westmoreland";
s_a[114] = "Jan Mayen";
s_a[115] = "Aichi|Akita|Aomori|Chiba|Ehime|Fukui|Fukuoka|Fukushima|Gifu|Gumma|Hiroshima|Hokkaido|Hyogo|Ibaraki|Ishikawa|Iwate|Kagawa|Kagoshima|Kanagawa|Kochi|Kumamoto|Kyoto|Mie|Miyagi|Miyazaki|Nagano|Nagasaki|Nara|Niigata|Oita|Okayama|Okinawa|Osaka|Saga|Saitama|Shiga|Shimane|Shizuoka|Tochigi|Tokushima|Tokyo|Tottori|Toyama|Wakayama|Yamagata|Yamaguchi|Yamanashi";
s_a[116] = "Jarvis Island";
s_a[117] = "Jersey";
s_a[118] = "Johnston Atoll";
s_a[119] = "'Amman|Ajlun|Al 'Aqabah|Al Balqa'|Al Karak|Al Mafraq|At Tafilah|Az Zarqa'|Irbid|Jarash|Ma'an|Madaba";
s_a[120] = "Juan de Nova Island";
s_a[121] = "Almaty|Aqmola|Aqtobe|Astana|Atyrau|Batys Qazaqstan|Bayqongyr|Mangghystau|Ongtustik Qazaqstan|Pavlodar|Qaraghandy|Qostanay|Qyzylorda|Shyghys Qazaqstan|Soltustik Qazaqstan|Zhambyl";
s_a[122] = "Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western";
s_a[123] = "Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands|Kanton|Kiritimati|Kuria|Line Islands|Line Islands|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina";
s_a[124] = "Chagang-do (Chagang Province)|Hamgyong-bukto (North Hamgyong Province)|Hamgyong-namdo (South Hamgyong Province)|Hwanghae-bukto (North Hwanghae Province)|Hwanghae-namdo (South Hwanghae Province)|Kaesong-si (Kaesong City)|Kangwon-do (Kangwon Province)|Namp'o-si (Namp'o City)|P'yongan-bukto (North P'yongan Province)|P'yongan-namdo (South P'yongan Province)|P'yongyang-si (P'yongyang City)|Yanggang-do (Yanggang Province)";
s_a[125] = "Ch'ungch'ong-bukto|Ch'ungch'ong-namdo|Cheju-do|Cholla-bukto|Cholla-namdo|Inch'on-gwangyoksi|Kangwon-do|Kwangju-gwangyoksi|Kyonggi-do|Kyongsang-bukto|Kyongsang-namdo|Pusan-gwangyoksi|Soul-t'ukpyolsi|Taegu-gwangyoksi|Taejon-gwangyoksi|Ulsan-gwangyoksi";
s_a[126] = "Al 'Asimah|Al Ahmadi|Al Farwaniyah|Al Jahra'|Hawalli";
s_a[127] = "Batken Oblasty|Bishkek Shaary|Chuy Oblasty (Bishkek)|Jalal-Abad Oblasty|Naryn Oblasty|Osh Oblasty|Talas Oblasty|Ysyk-Kol Oblasty (Karakol)";
s_a[128] = "Attapu|Bokeo|Bolikhamxai|Champasak|Houaphan|Khammouan|Louangnamtha|Louangphabang|Oudomxai|Phongsali|Salavan|Savannakhet|Viangchan|Viangchan|Xaignabouli|Xaisomboun|Xekong|Xiangkhoang";
s_a[129] = "Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons";
s_a[130] = "Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane";
s_a[131] = "Berea|Butha-Buthe|Leribe|Mafeteng|Maseru|Mohales Hoek|Mokhotlong|Qacha's Nek|Quthing|Thaba-Tseka";
s_a[132] = "Bomi|Bong|Grand Bassa|Grand Cape Mount|Grand Gedeh|Grand Kru|Lofa|Margibi|Maryland|Montserrado|Nimba|River Cess|Sinoe";
s_a[133] = "Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan";
s_a[134] = "Balzers|Eschen|Gamprin|Mauren|Planken|Ruggell|Schaan|Schellenberg|Triesen|Triesenberg|Vaduz";
s_a[135] = "Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas";
s_a[136] = "Diekirch|Grevenmacher|Luxembourg";
s_a[137] = "Macau";
s_a[138] = "Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (Skopje)|Centar Zupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)|Drugovo|Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (Skopje)|Klecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva Palanka|Krivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi Anovi|Meseista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilep|Probistip|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro Nagoricane|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitoliste|Vranestica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci";
s_a[139] = "Antananarivo|Antsiranana|Fianarantsoa|Mahajanga|Toamasina|Toliara";
s_a[140] = "Balaka|Blantyre|Chikwawa|Chiradzulu|Chitipa|Dedza|Dowa|Karonga|Kasungu|Likoma|Lilongwe|Machinga (Kasupe)|Mangochi|Mchinji|Mulanje|Mwanza|Mzimba|Nkhata Bay|Nkhotakota|Nsanje|Ntcheu|Ntchisi|Phalombe|Rumphi|Salima|Thyolo|Zomba";
s_a[141] = "Johor|Kedah|Kelantan|Labuan|Melaka|Negeri Sembilan|Pahang|Perak|Perlis|Pulau Pinang|Sabah|Sarawak|Selangor|Terengganu|Wilayah Persekutuan";
s_a[142] = "Alifu|Baa|Dhaalu|Faafu|Gaafu Alifu|Gaafu Dhaalu|Gnaviyani|Haa Alifu|Haa Dhaalu|Kaafu|Laamu|Lhaviyani|Maale|Meemu|Noonu|Raa|Seenu|Shaviyani|Thaa|Vaavu";
s_a[143] = "Gao|Kayes|Kidal|Koulikoro|Mopti|Segou|Sikasso|Tombouctou";
s_a[144] = "Valletta";
s_a[145] = "Man, Isle of";
s_a[146] = "Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejit|Mili|Namorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje";
s_a[147] = "Martinique";
s_a[148] = "Adrar|Assaba|Brakna|Dakhlet Nouadhibou|Gorgol|Guidimaka|Hodh Ech Chargui|Hodh El Gharbi|Inchiri|Nouakchott|Tagant|Tiris Zemmour|Trarza";
s_a[149] = "Agalega Islands|Black River|Cargados Carajos Shoals|Flacq|Grand Port|Moka|Pamplemousses|Plaines Wilhems|Port Louis|Riviere du Rempart|Rodrigues|Savanne";
s_a[150] = "Mayotte";
s_a[151] = "Aguascalientes|Baja California|Baja California Sur|Campeche|Chiapas|Chihuahua|Coahuila de Zaragoza|Colima|Distrito Federal|Durango|Guanajuato|Guerrero|Hidalgo|Jalisco|Mexico|Michoacan de Ocampo|Morelos|Nayarit|Nuevo Leon|Oaxaca|Puebla|Queretaro de Arteaga|Quintana Roo|San Luis Potosi|Sinaloa|Sonora|Tabasco|Tamaulipas|Tlaxcala|Veracruz-Llave|Yucatan|Zacatecas";
s_a[152] = "Chuuk (Truk)|Kosrae|Pohnpei|Yap";
s_a[153] = "Midway Islands";
s_a[154] = "Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni";
s_a[155] = "Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo";
s_a[156] = "Arhangay|Bayan-Olgiy|Bayanhongor|Bulgan|Darhan|Dornod|Dornogovi|Dundgovi|Dzavhan|Erdenet|Govi-Altay|Hentiy|Hovd|Hovsgol|Omnogovi|Ovorhangay|Selenge|Suhbaatar|Tov|Ulaanbaatar|Uvs";
s_a[157] = "Saint Anthony|Saint Georges|Saint Peter's";
s_a[158] = "Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Rachidia|Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-Sale|Safi|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit";
s_a[159] = "Cabo Delgado|Gaza|Inhambane|Manica|Maputo|Nampula|Niassa|Sofala|Tete|Zambezia";
s_a[160] = "Caprivi|Erongo|Hardap|Karas|Khomas|Kunene|Ohangwena|Okavango|Omaheke|Omusati|Oshana|Oshikoto|Otjozondjupa";
s_a[161] = "Aiwo|Anabar|Anetan|Anibare|Baiti|Boe|Buada|Denigomodu|Ewa|Ijuw|Meneng|Nibok|Uaboe|Yaren";
s_a[162] = "Bagmati|Bheri|Dhawalagiri|Gandaki|Janakpur|Karnali|Kosi|Lumbini|Mahakali|Mechi|Narayani|Rapti|Sagarmatha|Seti";
s_a[163] = "Drenthe|Flevoland|Friesland|Gelderland|Groningen|Limburg|Noord-Brabant|Noord-Holland|Overijssel|Utrecht|Zeeland|Zuid-Holland";
s_a[164] = "Netherlands Antilles";
s_a[165] = "Iles Loyaute|Nord|Sud";
s_a[166] = "Akaroa|Amuri|Ashburton|Bay of Islands|Bruce|Buller|Chatham Islands|Cheviot|Clifton|Clutha|Cook|Dannevirke|Egmont|Eketahuna|Ellesmere|Eltham|Eyre|Featherston|Franklin|Golden Bay|Great Barrier Island|Grey|Hauraki Plains|Hawera|Hawke's Bay|Heathcote|Hikurangi|Hobson|Hokianga|Horowhenua|Hurunui|Hutt|Inangahua|Inglewood|Kaikoura|Kairanga|Kiwitea|Lake|Mackenzie|Malvern|Manaia|Manawatu|Mangonui|Maniototo|Marlborough|Masterton|Matamata|Mount Herbert|Ohinemuri|Opotiki|Oroua|Otamatea|Otorohanga|Oxford|Pahiatua|Paparua|Patea|Piako|Pohangina|Raglan|Rangiora|Rangitikei|Rodney|Rotorua|Runanga|Saint Kilda|Silverpeaks|Southland|Stewart Island|Stratford|Strathallan|Taranaki|Taumarunui|Taupo|Tauranga|Thames-Coromandel|Tuapeka|Vincent|Waiapu|Waiheke|Waihemo|Waikato|Waikohu|Waimairi|Waimarino|Waimate|Waimate West|Waimea|Waipa|Waipawa|Waipukurau|Wairarapa South|Wairewa|Wairoa|Waitaki|Waitomo|Waitotara|Wallace|Wanganui|Waverley|Westland|Whakatane|Whangarei|Whangaroa|Woodville";
s_a[167] = "Atlantico Norte|Atlantico Sur|Boaco|Carazo|Chinandega|Chontales|Esteli|Granada|Jinotega|Leon|Madriz|Managua|Masaya|Matagalpa|Nueva Segovia|Rio San Juan|Rivas";
s_a[168] = "Agadez|Diffa|Dosso|Maradi|Niamey|Tahoua|Tillaberi|Zinder";
s_a[169] = "Abia|Abuja Federal Capital Territory|Adamawa|Akwa Ibom|Anambra|Bauchi|Bayelsa|Benue|Borno|Cross River|Delta|Ebonyi|Edo|Ekiti|Enugu|Gombe|Imo|Jigawa|Kaduna|Kano|Katsina|Kebbi|Kogi|Kwara|Lagos|Nassarawa|Niger|Ogun|Ondo|Osun|Oyo|Plateau|Rivers|Sokoto|Taraba|Yobe|Zamfara";
s_a[170] = "Niue";
s_a[171] = "Norfolk Island";
s_a[172] = "Northern Islands|Rota|Saipan|Tinian";
s_a[173] = "Akershus|Aust-Agder|Buskerud|Finnmark|Hedmark|Hordaland|More og Romsdal|Nord-Trondelag|Nordland|Oppland|Oslo|Ostfold|Rogaland|Sogn og Fjordane|Sor-Trondelag|Telemark|Troms|Vest-Agder|Vestfold";
s_a[174] = "Ad Dakhiliyah|Al Batinah|Al Wusta|Ash Sharqiyah|Az Zahirah|Masqat|Musandam|Zufar";
s_a[175] = "Balochistan|Federally Administered Tribal Areas|Islamabad Capital Territory|North-West Frontier Province|Punjab|Sindh";
s_a[176] = "Aimeliik|Airai|Angaur|Hatobohei|Kayangel|Koror|Melekeok|Ngaraard|Ngarchelong|Ngardmau|Ngatpang|Ngchesar|Ngeremlengui|Ngiwal|Palau Island|Peleliu|Sonsoral|Tobi";
s_a[177] = "Bocas del Toro|Chiriqui|Cocle|Colon|Darien|Herrera|Los Santos|Panama|San Blas|Veraguas";
s_a[178] = "Bougainville|Central|Chimbu|East New Britain|East Sepik|Eastern Highlands|Enga|Gulf|Madang|Manus|Milne Bay|Morobe|National Capital|New Ireland|Northern|Sandaun|Southern Highlands|West New Britain|Western|Western Highlands";
s_a[179] = "Alto Paraguay|Alto Parana|Amambay|Asuncion (city)|Boqueron|Caaguazu|Caazapa|Canindeyu|Central|Concepcion|Cordillera|Guaira|Itapua|Misiones|Neembucu|Paraguari|Presidente Hayes|San Pedro";
s_a[180] = "Amazonas|Ancash|Apurimac|Arequipa|Ayacucho|Cajamarca|Callao|Cusco|Huancavelica|Huanuco|Ica|Junin|La Libertad|Lambayeque|Lima|Loreto|Madre de Dios|Moquegua|Pasco|Piura|Puno|San Martin|Tacna|Tumbes|Ucayali";
s_a[181] = "Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan City|Bataan|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines Norte|Camarines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Oriental|Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La Carlota|La Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro Occidental|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva Ecija|Nueva Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon City|Quirino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Cotabato|Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Martires|Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur";
s_a[182] = "Pitcaim Islands";
s_a[183] = "Dolnoslaskie|Kujawsko-Pomorskie|Lodzkie|Lubelskie|Lubuskie|Malopolskie|Mazowieckie|Opolskie|Podkarpackie|Podlaskie|Pomorskie|Slaskie|Swietokrzyskie|Warminsko-Mazurskie|Wielkopolskie|Zachodniopomorskie";
s_a[184] = "Acores (Azores)|Aveiro|Beja|Braga|Braganca|Castelo Branco|Coimbra|Evora|Faro|Guarda|Leiria|Lisboa|Madeira|Portalegre|Porto|Santarem|Setubal|Viana do Castelo|Vila Real|Viseu";
s_a[185] = "Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Catano|Cayey|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabela|Jayuya|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las Piedras|Loiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana Grande|Salinas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega Baja|Vieques|Villalba|Yabucoa|Yauco";
s_a[186] = "Ad Dawhah|Al Ghuwayriyah|Al Jumayliyah|Al Khawr|Al Wakrah|Ar Rayyan|Jarayan al Batinah|Madinat ash Shamal|Umm Salal";
s_a[187] = "Reunion";
s_a[188] = "Alba|Arad|Arges|Bacau|Bihor|Bistrita-Nasaud|Botosani|Braila|Brasov|Bucuresti|Buzau|Calarasi|Caras-Severin|Cluj|Constanta|Covasna|Dimbovita|Dolj|Galati|Giurgiu|Gorj|Harghita|Hunedoara|Ialomita|Iasi|Maramures|Mehedinti|Mures|Neamt|Olt|Prahova|Salaj|Satu Mare|Sibiu|Suceava|Teleorman|Timis|Tulcea|Vaslui|Vilcea|Vrancea";
s_a[189] = "Adygeya (Maykop)|Aginskiy Buryatskiy (Aginskoye)|Altay (Gorno-Altaysk)|Altayskiy (Barnaul)|Amurskaya (Blagoveshchensk)|Arkhangel'skaya|Astrakhanskaya|Bashkortostan (Ufa)|Belgorodskaya|Bryanskaya|Buryatiya (Ulan-Ude)|Chechnya (Groznyy)|Chelyabinskaya|Chitinskaya|Chukotskiy (Anadyr')|Chuvashiya (Cheboksary)|Dagestan (Makhachkala)|Evenkiyskiy (Tura)|Ingushetiya (Nazran')|Irkutskaya|Ivanovskaya|Kabardino-Balkariya (Nal'chik)|Kaliningradskaya|Kalmykiya (Elista)|Kaluzhskaya|Kamchatskaya (Petropavlovsk-Kamchatskiy)|Karachayevo-Cherkesiya (Cherkessk)|Kareliya (Petrozavodsk)|Kemerovskaya|Khabarovskiy|Khakasiya (Abakan)|Khanty-Mansiyskiy (Khanty-Mansiysk)|Kirovskaya|Komi (Syktyvkar)|Komi-Permyatskiy (Kudymkar)|Koryakskiy (Palana)|Kostromskaya|Krasnodarskiy|Krasnoyarskiy|Kurganskaya|Kurskaya|Leningradskaya|Lipetskaya|Magadanskaya|Mariy-El (Yoshkar-Ola)|Mordoviya (Saransk)|Moskovskaya|Moskva (Moscow)|Murmanskaya|Nenetskiy (Nar'yan-Mar)|Nizhegorodskaya|Novgorodskaya|Novosibirskaya|Omskaya|Orenburgskaya|Orlovskaya (Orel)|Penzenskaya|Permskaya|Primorskiy (Vladivostok)|Pskovskaya|Rostovskaya|Ryazanskaya|Sakha (Yakutsk)|Sakhalinskaya (Yuzhno-Sakhalinsk)|Samarskaya|Sankt-Peterburg (Saint Petersburg)|Saratovskaya|Severnaya Osetiya-Alaniya [North Ossetia] (Vladikavkaz)|Smolenskaya|Stavropol'skiy|Sverdlovskaya (Yekaterinburg)|Tambovskaya|Tatarstan (Kazan')|Taymyrskiy (Dudinka)|Tomskaya|Tul'skaya|Tverskaya|Tyumenskaya|Tyva (Kyzyl)|Udmurtiya (Izhevsk)|Ul'yanovskaya|Ust'-Ordynskiy Buryatskiy (Ust'-Ordynskiy)|Vladimirskaya|Volgogradskaya|Vologodskaya|Voronezhskaya|Yamalo-Nenetskiy (Salekhard)|Yaroslavskaya|Yevreyskaya";
s_a[190] = "Butare|Byumba|Cyangugu|Gikongoro|Gisenyi|Gitarama|Kibungo|Kibuye|Kigali Rurale|Kigali-ville|Ruhengeri|Umutara";
s_a[191] = "Ascension|Saint Helena|Tristan da Cunha";
s_a[192] = "Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint John Figtree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Palmetto Point";
s_a[193] = "Anse-la-Raye|Castries|Choiseul|Dauphin|Dennery|Gros Islet|Laborie|Micoud|Praslin|Soufriere|Vieux Fort";
s_a[194] = "Miquelon|Saint Pierre";
s_a[195] = "Charlotte|Grenadines|Saint Andrew|Saint David|Saint George|Saint Patrick";
s_a[196] = "A'ana|Aiga-i-le-Tai|Atua|Fa'asaleleaga|Gaga'emauga|Gagaifomauga|Palauli|Satupa'itea|Tuamasaga|Va'a-o-Fonoti|Vaisigano";
s_a[197] = "Acquaviva|Borgo Maggiore|Chiesanuova|Domagnano|Faetano|Fiorentino|Monte Giardino|San Marino|Serravalle";
s_a[198] = "Principe|Sao Tome";
s_a[199] = "'Asir|Al Bahah|Al Hudud ash Shamaliyah|Al Jawf|Al Madinah|Al Qasim|Ar Riyad|Ash Sharqiyah (Eastern Province)|Ha'il|Jizan|Makkah|Najran|Tabuk";
s_a[200] = "Aberdeen City|Aberdeenshire|Angus|Argyll and Bute|City of Edinburgh|Clackmannanshire|Dumfries and Galloway|Dundee City|East Ayrshire|East Dunbartonshire|East Lothian|East Renfrewshire|Eilean Siar (Western Isles)|Falkirk|Fife|Glasgow City|Highland|Inverclyde|Midlothian|Moray|North Ayrshire|North Lanarkshire|Orkney Islands|Perth and Kinross|Renfrewshire|Shetland Islands|South Ayrshire|South Lanarkshire|Stirling|The Scottish Borders|West Dunbartonshire|West Lothian";
s_a[201] = "Dakar|Diourbel|Fatick|Kaolack|Kolda|Louga|Saint-Louis|Tambacounda|Thies|Ziguinchor";
s_a[202] = "Anse aux Pins|Anse Boileau|Anse Etoile|Anse Louis|Anse Royale|Baie Lazare|Baie Sainte Anne|Beau Vallon|Bel Air|Bel Ombre|Cascade|Glacis|Grand' Anse (on Mahe)|Grand' Anse (on Praslin)|La Digue|La Riviere Anglaise|Mont Buxton|Mont Fleuri|Plaisance|Pointe La Rue|Port Glaud|Saint Louis|Takamaka";
s_a[203] = "Eastern|Northern|Southern|Western";
s_a[204] = "Singapore";
s_a[205] = "Banskobystricky|Bratislavsky|Kosicky|Nitriansky|Presovsky|Trenciansky|Trnavsky|Zilinsky";
s_a[206] = "Ajdovscina|Beltinci|Bled|Bohinj|Borovnica|Bovec|Brda|Brezice|Brezovica|Cankova-Tisina|Celje|Cerklje na Gorenjskem|Cerknica|Cerkno|Crensovci|Crna na Koroskem|Crnomelj|Destrnik-Trnovska Vas|Divaca|Dobrepolje|Dobrova-Horjul-Polhov Gradec|Dol pri Ljubljani|Domzale|Dornava|Dravograd|Duplek|Gorenja Vas-Poljane|Gorisnica|Gornja Radgona|Gornji Grad|Gornji Petrovci|Grosuplje|Hodos Salovci|Hrastnik|Hrpelje-Kozina|Idrija|Ig|Ilirska Bistrica|Ivancna Gorica|Izola|Jesenice|Jursinci|Kamnik|Kanal|Kidricevo|Kobarid|Kobilje|Kocevje|Komen|Koper|Kozje|Kranj|Kranjska Gora|Krsko|Kungota|Kuzma|Lasko|Lenart|Lendava|Litija|Ljubljana|Ljubno|Ljutomer|Logatec|Loska Dolina|Loski Potok|Luce|Lukovica|Majsperk|Maribor|Medvode|Menges|Metlika|Mezica|Miren-Kostanjevica|Mislinja|Moravce|Moravske Toplice|Mozirje|Murska Sobota|Muta|Naklo|Nazarje|Nova Gorica|Novo Mesto|Odranci|Ormoz|Osilnica|Pesnica|Piran|Pivka|Podcetrtek|Podvelka-Ribnica|Postojna|Preddvor|Ptuj|Puconci|Race-Fram|Radece|Radenci|Radlje ob Dravi|Radovljica|Ravne-Prevalje|Ribnica|Rogasevci|Rogaska Slatina|Rogatec|Ruse|Semic|Sencur|Sentilj|Sentjernej|Sentjur pri Celju|Sevnica|Sezana|Skocjan|Skofja Loka|Skofljica|Slovenj Gradec|Slovenska Bistrica|Slovenske Konjice|Smarje pri Jelsah|Smartno ob Paki|Sostanj|Starse|Store|Sveti Jurij|Tolmin|Trbovlje|Trebnje|Trzic|Turnisce|Velenje|Velike Lasce|Videm|Vipava|Vitanje|Vodice|Vojnik|Vrhnika|Vuzenica|Zagorje ob Savi|Zalec|Zavrc|Zelezniki|Ziri|Zrece";
s_a[207] = "Bellona|Central|Choiseul (Lauru)|Guadalcanal|Honiara|Isabel|Makira|Malaita|Rennell|Temotu|Western";
s_a[208] = "Awdal|Bakool|Banaadir|Bari|Bay|Galguduud|Gedo|Hiiraan|Jubbada Dhexe|Jubbada Hoose|Mudug|Nugaal|Sanaag|Shabeellaha Dhexe|Shabeellaha Hoose|Sool|Togdheer|Woqooyi Galbeed";
s_a[209] = "Eastern Cape|Free State|Gauteng|KwaZulu-Natal|Mpumalanga|North-West|Northern Cape|Northern Province|Western Cape";
s_a[210] = "Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands";
s_a[211] = "Andalucia|Aragon|Asturias|Baleares (Balearic Islands)|Canarias (Canary Islands)|Cantabria|Castilla y Leon|Castilla-La Mancha|Cataluna|Ceuta|Communidad Valencian|Extremadura|Galicia|Islas Chafarinas|La Rioja|Madrid|Melilla|Murcia|Navarra|Pais Vasco (Basque Country)|Penon de Alhucemas|Penon de Velez de la Gomera";
s_a[212] = "Spratly Islands";
s_a[213] = "Central|Eastern|North Central|North Eastern|North Western|Northern|Sabaragamuwa|Southern|Uva|Western";
s_a[214] = "A'ali an Nil|Al Bahr al Ahmar|Al Buhayrat|Al Jazirah|Al Khartum|Al Qadarif|Al Wahdah|An Nil al Abyad|An Nil al Azraq|Ash Shamaliyah|Bahr al Jabal|Gharb al Istiwa'iyah|Gharb Bahr al Ghazal|Gharb Darfur|Gharb Kurdufan|Janub Darfur|Janub Kurdufan|Junqali|Kassala|Nahr an Nil|Shamal Bahr al Ghazal|Shamal Darfur|Shamal Kurdufan|Sharq al Istiwa'iyah|Sinnar|Warab";
s_a[215] = "Brokopondo|Commewijne|Coronie|Marowijne|Nickerie|Para|Paramaribo|Saramacca|Sipaliwini|Wanica";
s_a[216] = "Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen";
s_a[217] = "Hhohho|Lubombo|Manzini|Shiselweni";
s_a[218] = "Blekinge|Dalarnas|Gavleborgs|Gotlands|Hallands|Jamtlands|Jonkopings|Kalmar|Kronobergs|Norrbottens|Orebro|Ostergotlands|Skane|Sodermanlands|Stockholms|Uppsala|Varmlands|Vasterbottens|Vasternorrlands|Vastmanlands|Vastra Gotalands";
s_a[219] = "Aargau|Ausser-Rhoden|Basel-Landschaft|Basel-Stadt|Bern|Fribourg|Geneve|Glarus|Graubunden|Inner-Rhoden|Jura|Luzern|Neuchatel|Nidwalden|Obwalden|Sankt Gallen|Schaffhausen|Schwyz|Solothurn|Thurgau|Ticino|Uri|Valais|Vaud|Zug|Zurich";
s_a[220] = "Al Hasakah|Al Ladhiqiyah|Al Qunaytirah|Ar Raqqah|As Suwayda'|Dar'a|Dayr az Zawr|Dimashq|Halab|Hamah|Hims|Idlib|Rif Dimashq|Tartus";
s_a[221] = "Chang-hua|Chi-lung|Chia-i|Chia-i|Chung-hsing-hsin-ts'un|Hsin-chu|Hsin-chu|Hua-lien|I-lan|Kao-hsiung|Kao-hsiung|Miao-li|Nan-t'ou|P'eng-hu|P'ing-tung|T'ai-chung|T'ai-chung|T'ai-nan|T'ai-nan|T'ai-pei|T'ai-pei|T'ai-tung|T'ao-yuan|Yun-lin";
s_a[222] = "Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon";
s_a[223] = "Arusha|Dar es Salaam|Dodoma|Iringa|Kagera|Kigoma|Kilimanjaro|Lindi|Mara|Mbeya|Morogoro|Mtwara|Mwanza|Pemba North|Pemba South|Pwani|Rukwa|Ruvuma|Shinyanga|Singida|Tabora|Tanga|Zanzibar Central/South|Zanzibar North|Zanzibar Urban/West";
s_a[224] = "Amnat Charoen|Ang Thong|Buriram|Chachoengsao|Chai Nat|Chaiyaphum|Chanthaburi|Chiang Mai|Chiang Rai|Chon Buri|Chumphon|Kalasin|Kamphaeng Phet|Kanchanaburi|Khon Kaen|Krabi|Krung Thep Mahanakhon (Bangkok)|Lampang|Lamphun|Loei|Lop Buri|Mae Hong Son|Maha Sarakham|Mukdahan|Nakhon Nayok|Nakhon Pathom|Nakhon Phanom|Nakhon Ratchasima|Nakhon Sawan|Nakhon Si Thammarat|Nan|Narathiwat|Nong Bua Lamphu|Nong Khai|Nonthaburi|Pathum Thani|Pattani|Phangnga|Phatthalung|Phayao|Phetchabun|Phetchaburi|Phichit|Phitsanulok|Phra Nakhon Si Ayutthaya|Phrae|Phuket|Prachin Buri|Prachuap Khiri Khan|Ranong|Ratchaburi|Rayong|Roi Et|Sa Kaeo|Sakon Nakhon|Samut Prakan|Samut Sakhon|Samut Songkhram|Sara Buri|Satun|Sing Buri|Sisaket|Songkhla|Sukhothai|Suphan Buri|Surat Thani|Surin|Tak|Trang|Trat|Ubon Ratchathani|Udon Thani|Uthai Thani|Uttaradit|Yala|Yasothon";
s_a[225] = "Tobago";
s_a[226] = "De La Kara|Des Plateaux|Des Savanes|Du Centre|Maritime";
s_a[227] = "Atafu|Fakaofo|Nukunonu";
s_a[228] = "Ha'apai|Tongatapu|Vava'u";
s_a[229] = "Arima|Caroni|Mayaro|Nariva|Port-of-Spain|Saint Andrew|Saint David|Saint George|Saint Patrick|San Fernando|Victoria";
s_a[230] = "Ariana|Beja|Ben Arous|Bizerte|El Kef|Gabes|Gafsa|Jendouba|Kairouan|Kasserine|Kebili|Mahdia|Medenine|Monastir|Nabeul|Sfax|Sidi Bou Zid|Siliana|Sousse|Tataouine|Tozeur|Tunis|Zaghouan";
s_a[231] = "Adana|Adiyaman|Afyon|Agri|Aksaray|Amasya|Ankara|Antalya|Ardahan|Artvin|Aydin|Balikesir|Bartin|Batman|Bayburt|Bilecik|Bingol|Bitlis|Bolu|Burdur|Bursa|Canakkale|Cankiri|Corum|Denizli|Diyarbakir|Duzce|Edirne|Elazig|Erzincan|Erzurum|Eskisehir|Gaziantep|Giresun|Gumushane|Hakkari|Hatay|Icel|Igdir|Isparta|Istanbul|Izmir|Kahramanmaras|Karabuk|Karaman|Kars|Kastamonu|Kayseri|Kilis|Kirikkale|Kirklareli|Kirsehir|Kocaeli|Konya|Kutahya|Malatya|Manisa|Mardin|Mugla|Mus|Nevsehir|Nigde|Ordu|Osmaniye|Rize|Sakarya|Samsun|Sanliurfa|Siirt|Sinop|Sirnak|Sivas|Tekirdag|Tokat|Trabzon|Tunceli|Usak|Van|Yalova|Yozgat|Zonguldak";
s_a[232] = "Ahal Welayaty|Balkan Welayaty|Dashhowuz Welayaty|Lebap Welayaty|Mary Welayaty";
s_a[233] = "Tuvalu";
s_a[234] = "Adjumani|Apac|Arua|Bugiri|Bundibugyo|Bushenyi|Busia|Gulu|Hoima|Iganga|Jinja|Kabale|Kabarole|Kalangala|Kampala|Kamuli|Kapchorwa|Kasese|Katakwi|Kibale|Kiboga|Kisoro|Kitgum|Kotido|Kumi|Lira|Luwero|Masaka|Masindi|Mbale|Mbarara|Moroto|Moyo|Mpigi|Mubende|Mukono|Nakasongola|Nebbi|Ntungamo|Pallisa|Rakai|Rukungiri|Sembabule|Soroti|Tororo";
s_a[235] = "Avtonomna Respublika Krym (Simferopol')|Cherkas'ka (Cherkasy)|Chernihivs'ka (Chernihiv)|Chernivets'ka (Chernivtsi)|Dnipropetrovs'ka (Dnipropetrovs'k)|Donets'ka (Donets'k)|Ivano-Frankivs'ka (Ivano-Frankivs'k)|Kharkivs'ka (Kharkiv)|Khersons'ka (Kherson)|Khmel'nyts'ka (Khmel'nyts'kyy)|Kirovohrads'ka (Kirovohrad)|Kyyiv|Kyyivs'ka (Kiev)|L'vivs'ka (L'viv)|Luhans'ka (Luhans'k)|Mykolayivs'ka (Mykolayiv)|Odes'ka (Odesa)|Poltavs'ka (Poltava)|Rivnens'ka (Rivne)|Sevastopol'|Sums'ka (Sumy)|Ternopil's'ka (Ternopil')|Vinnyts'ka (Vinnytsya)|Volyns'ka (Luts'k)|Zakarpats'ka (Uzhhorod)|Zaporiz'ka (Zaporizhzhya)|Zhytomyrs'ka (Zhytomyr)";
s_a[236] = "'Ajman|Abu Zaby (Abu Dhabi)|Al Fujayrah|Ash Shariqah (Sharjah)|Dubayy (Dubai)|Ra's al Khaymah|Umm al Qaywayn";
s_a[237] = "Barking and Dagenham|Barnet|Barnsley|Bath and North East Somerset|Bedfordshire|Bexley|Birmingham|Blackburn with Darwen|Blackpool|Bolton|Bournemouth|Bracknell Forest|Bradford|Brent|Brighton and Hove|Bromley|Buckinghamshire|Bury|Calderdale|Cambridgeshire|Camden|Cheshire|City of Bristol|City of Kingston upon Hull|City of London|Cornwall|Coventry|Croydon|Cumbria|Darlington|Derby|Derbyshire|Devon|Doncaster|Dorset|Dudley|Durham|Ealing|East Riding of Yorkshire|East Sussex|Enfield|Essex|Gateshead|Gloucestershire|Greenwich|Hackney|Halton|Hammersmith and Fulham|Hampshire|Haringey|Harrow|Hartlepool|Havering|Herefordshire|Hertfordshire|Hillingdon|Hounslow|Isle of Wight|Islington|Kensington and Chelsea|Kent|Kingston upon Thames|Kirklees|Knowsley|Lambeth|Lancashire|Leeds|Leicester|Leicestershire|Lewisham|Lincolnshire|Liverpool|Luton|Manchester|Medway|Merton|Middlesbrough|Milton Keynes|Newcastle upon Tyne|Newham|Norfolk|North East Lincolnshire|North Lincolnshire|North Somerset|North Tyneside|North Yorkshire|Northamptonshire|Northumberland|Nottingham|Nottinghamshire|Oldham|Oxfordshire|Peterborough|Plymouth|Poole|Portsmouth|Reading|Redbridge|Redcar and Cleveland|Richmond upon Thames|Rochdale|Rotherham|Rutland|Salford|Sandwell|Sefton|Sheffield|Shropshire|Slough|Solihull|Somerset|South Gloucestershire|South Tyneside|Southampton|Southend-on-Sea|Southwark|St. Helens|Staffordshire|Stockport|Stockton-on-Tees|Stoke-on-Trent|Suffolk|Sunderland|Surrey|Sutton|Swindon|Tameside|Telford and Wrekin|Thurrock|Torbay|Tower Hamlets|Trafford|Wakefield|Walsall|Waltham Forest|Wandsworth|Warrington|Warwickshire|West Berkshire|West Sussex|Westminster|Wigan|Wiltshire|Windsor and Maidenhead|Wirral|Wokingham|Wolverhampton|Worcestershire|York";
s_a[238] = "Artigas|Canelones|Cerro Largo|Colonia|Durazno|Flores|Florida|Lavalleja|Maldonado|Montevideo|Paysandu|Rio Negro|Rivera|Rocha|Salto|San Jose|Soriano|Tacuarembo|Treinta y Tres";
s_a[239] = "Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
s_a[240] = "Andijon Wiloyati|Bukhoro Wiloyati|Farghona Wiloyati|Jizzakh Wiloyati|Khorazm Wiloyati (Urganch)|Namangan Wiloyati|Nawoiy Wiloyati|Qashqadaryo Wiloyati (Qarshi)|Qoraqalpoghiston (Nukus)|Samarqand Wiloyati|Sirdaryo Wiloyati (Guliston)|Surkhondaryo Wiloyati (Termiz)|Toshkent Shahri|Toshkent Wiloyati";
s_a[241] = "Malampa|Penama|Sanma|Shefa|Tafea|Torba";
s_a[242] = "Amazonas|Anzoategui|Apure|Aragua|Barinas|Bolivar|Carabobo|Cojedes|Delta Amacuro|Dependencias Federales|Distrito Federal|Falcon|Guarico|Lara|Merida|Miranda|Monagas|Nueva Esparta|Portuguesa|Sucre|Tachira|Trujillo|Vargas|Yaracuy|Zulia";
s_a[243] = "An Giang|Ba Ria-Vung Tau|Bac Giang|Bac Kan|Bac Lieu|Bac Ninh|Ben Tre|Binh Dinh|Binh Duong|Binh Phuoc|Binh Thuan|Ca Mau|Can Tho|Cao Bang|Da Nang|Dac Lak|Dong Nai|Dong Thap|Gia Lai|Ha Giang|Ha Nam|Ha Noi|Ha Tay|Ha Tinh|Hai Duong|Hai Phong|Ho Chi Minh|Hoa Binh|Hung Yen|Khanh Hoa|Kien Giang|Kon Tum|Lai Chau|Lam Dong|Lang Son|Lao Cai|Long An|Nam Dinh|Nghe An|Ninh Binh|Ninh Thuan|Phu Tho|Phu Yen|Quang Binh|Quang Nam|Quang Ngai|Quang Ninh|Quang Tri|Soc Trang|Son La|Tay Ninh|Thai Binh|Thai Nguyen|Thanh Hoa|Thua Thien-Hue|Tien Giang|Tra Vinh|Tuyen Quang|Vinh Long|Vinh Phuc|Yen Bai";
s_a[244] = "Saint Croix|Saint John|Saint Thomas";
s_a[245] = "Blaenau Gwent|Bridgend|Caerphilly|Cardiff|Carmarthenshire|Ceredigion|Conwy|Denbighshire|Flintshire|Gwynedd|Isle of Anglesey|Merthyr Tydfil|Monmouthshire|Neath Port Talbot|Newport|Pembrokeshire|Powys|Rhondda Cynon Taff|Swansea|The Vale of Glamorgan|Torfaen|Wrexham";
s_a[246] = "Alo|Sigave|Wallis";
s_a[247] = "West Bank";
s_a[248] = "Western Sahara";
s_a[249] = "'Adan|'Ataq|Abyan|Al Bayda'|Al Hudaydah|Al Jawf|Al Mahrah|Al Mahwit|Dhamar|Hadhramawt|Hajjah|Ibb|Lahij|Ma'rib|Sa'dah|San'a'|Ta'izz";
s_a[250] = "Kosovo|Montenegro|Serbia|Vojvodina";
s_a[251] = "Central|Copperbelt|Eastern|Luapula|Lusaka|North-Western|Northern|Southern|Western";
s_a[252] = "Bulawayo|Harare|ManicalandMashonaland Central|Mashonaland East|Mashonaland West|Masvingo|Matabeleland North|Matabeleland South|Midlands";

window.stateList = s_a;
/********************************************************************
* Global variable and api url
********************************************************************/

window.__API_PATH                       =   {};

__API_PATH.jotList                      = '/api/get_jot';
__API_PATH.UPDATE_JOT                   = '/api/update_jot';
__API_PATH.DELETE_JOT                   = '/api/delete_jot';
__API_PATH.CREATE_JOT                   = '/api/create_jot';
__API_PATH.GET_JOT                      = '/api/get_jot';
__API_PATH.ADD_COMMENT                  = '/api/add_jotactivity';
__API_PATH.GET_COMMENT                  = '/api/get_jotactivity';

__API_PATH.LOGIN                        = '/api/login';
__API_PATH.REGISTER                     = '/api/register';
__API_PATH.UPDATE_PROFILE               = '/api/edit_profile';
__API_PATH.CHANGE_PASSWORD               = '/api/changePassword';

__API_PATH.GET_HOTELS                   = '/api/get_hotels';
__API_PATH.GET_HOTEL_DETAIL             = '/api/hotel_detail';
__API_PATH.ADD_HOTEL                    = '/api/add_hotel';
__API_PATH.DELETE_HOTEL                 = '/api/delete_hotel';
__API_PATH.UPDATE_HOTEL                 = '/api/update_hotel';


__API_PATH.STAFF_SUGGESTION             = '/api/get_members';
__API_PATH.MEMBER_SIGNUP               = '/api/member_signup';



__API_PATH.JOT_COUNT                    = '/api/hotel_notifications';
//__API_PATH.GET_JOT_LIST                   = '/api/get_jot';

__API_PATH.GET_DEPARTMENTS              = '/api/get_departments';
__API_PATH.ADD_DEPARTMENT               = '/api/add_department';
__API_PATH.UPDATE_DEPARTMENT            = '/api/update_department';
__API_PATH.DELETE_DEPARTMENT            = '/api/delete_department';
__API_PATH.CONFIGURE_DEPARTMENTS        = '/api/configure_departments';

__API_PATH.FORGET_PASSWORD              = '/api/forgot_password';
__API_PATH.PASSWORD_RESET               = '/api/resetPassword';

__API_PATH.UPLOAD_FILE                  = '/api/uploadfiledata';


__API_PATH.LOST_FOUND                   = '/api/add_lost_found';
__API_PATH.GET_LOST_FOUND               = '/api/get_lost_found';
__API_PATH.DELETE_LOST_FOUND            = '/api/delete_lost_found';
__API_PATH.UPDATE_LOST_FOUND            = '/api/update_lost_found';

__API_PATH.GET_ITEMS                    = '/api/get_item';
__API_PATH.UPDATE_ITEM                  = '/api/update_item';
__API_PATH.ADD_ITEM                     = '/api/add_item';
__API_PATH.DELETE_ITEM                  = '/api/delete_item';
__API_PATH.PURCHASE                     = '/api/add_to_cart';

__API_PATH.CANCEL_ORDER                 = '/api/cancle_sale';
__API_PATH.PAYMENT_STATUS               = '/api/change_paymentstatus';

__API_PATH.ADD_INVENTORY_CATEGORY       = '/api/add_inventory_category';
__API_PATH.UPDATE_INVENTORY_CATEGORY    = '/api/update_inventory_category';
__API_PATH.DELETE_INVENTORY_CATEGORY    = '/api/delete_inventory_category';
__API_PATH.GET_INVENTORY_CATEGORY       = '/api/get_inventory_category';
__API_PATH.GET_REPORTS                  = '/api/get_mysale';

__API_PATH.GET_BOOK_REPORTS             = '/api/get_booking_report';

__API_PATH.ADD_MEMBER                   = '/api/add_member';
__API_PATH.UPDATE_MEMBER                = '/api/update_member';
__API_PATH.DELETE_MEMBER                = '/api/delete_member';

__API_PATH.CHECK_USER                   = '/api/checkusercontact';
__API_PATH.UPDATE_EMPLOYEE              = '/api/updateuserhotels';

__API_PATH.ADD_POSITION                 = '/api/add_position';
__API_PATH.UPDATE_POSITION              = '/api/update_position';
__API_PATH.DELETE_POSITION              = '/api/delete_position';
__API_PATH.GET_POSITION                 = '/api/get_position';


__API_PATH.ADD_HOTELSHIFT               = '/api/add_hotelshift';
__API_PATH.GET_HOTELSHIFTS              = '/api/get_hotelshifts';
__API_PATH.DELETE_HOTELSHIFTS           = '/api/delete_hotelshift';
__API_PATH.UPDATE_HOTELSHIFTS           = '/api/update_hotelshift';

__API_PATH.MEMBER_SCHEDULE_DATA         = '/api/member_schedule_data';
__API_PATH.ADD_MEMBER_SCHEDULE          = '/api/add_member_schedule';
__API_PATH.ADD_MULTIPLE_SCHEDULE        = '/api/add_multipleschedule';



__API_PATH.ADD_CONTACT                  = '/api/add_contact';
__API_PATH.GET_CONTACTS                 = '/api/get_contact';
__API_PATH.DELETE_CONTACT               = '/api/delete_contact';
__API_PATH.UPDATE_CONTACT               = '/api/update_contact';


__API_PATH.ADD_DOCUMENT                 = '/api/add_document';
__API_PATH.UPDATE_DOCUMENT              = '/api/update_document';
__API_PATH.DELETE_DOCUMENT              = '/api/delete_document';
__API_PATH.GET_DOCUMENT                 = '/api/get_document';
__API_PATH.MOVE_DOCUMENT                = '/api/move_document';
__API_PATH.CONFIGURE_MEMBERS            = '/api/configure_members';
__API_PATH.CONFIGURE_ROOMS              = '/api/configure_rooms';

__API_PATH.GET_HOTEL_STATUS             = '/api/getHotelStatus';




__API_PATH.ADD_MEETINGROOM              = '/api/add_meetingroom';
__API_PATH.UPDATE_MEETINGROOM           = '/api/update_meetingroom';
__API_PATH.DELETE_MEETINGROOM           = '/api/delete_meetingroom';
__API_PATH.GET_MEETINGROOMS             = '/api/get_meetingrooms';


__API_PATH.BOOK_ROOM                    = '/api/book_room';
__API_PATH.ADD_BOOKING                  = '/api/add_booking';
__API_PATH.CANCEL_BOOKING               = '/api/cancel_booking';

__API_PATH.ADD_ALERT                    = '/api/add_alert';
__API_PATH.GET_ALERTS                   = '/api/get_alerts';
__API_PATH.UPDATE_ALERT                 = '/api/update_alert';
__API_PATH.GET_NOTIFICATION             = '/api/get_notification';



__API_PATH.HEADER_MENU =  [
    {label:"Home", id:"home", href:"/"},
    {label:"ABOUT", id:"about-us", href:"#" ,class:"active"},
    {label:"HOW IT WORKS", id:"work", href:'#',class:""},
    {label:"FEATURES", id:"feature", href:'#',class:""},
    {label:"TESTIMONALS", id:"testimonial", href:'#',class:""}
];



__API_PATH.JOT_TYPES  = {
                            quick:{label:"Quick",id:'quick',data:'assets/images/jot_icon.png',icontype:'image',directory:'jot',bgcolor:"#3953a8",class:"cirsularhide",default:true,order:1},
                            
                            issue:{label:"Issue",id:'issue',data:'assets/images/issue_icon.png',icontype:'image',directory:'jot',bgcolor:"#53ad78",class:"",default:true,order:2},
                           
                            task:{label:"Task",id:'task',data:'assets/images/task_icon.png',icontype:'image',directory:'jot',bgcolor:"#aba0ef",class:"",default:true,order:3},
                            
                            note:{label:"Note",id:'note',data:'assets/images/note_icon.png',icontype:'image',directory:'jot',bgcolor:"#71adf7",class:"",default:true,order:4},

                            messages:{label:"Messages",id:'messages',data:'assets/images/message_icon.png',icontype:'image',directory:'jot',bgcolor:"#198cc6",class:"",default:true,order:5},
                            
                            lost_found:{label:"Lost & Found",id:'lost_found',data:'assets/images/lost_icon.png',icontype:'image',directory:'lost_found',bgcolor:"#e37f4b",class:"",default:false,order:6},
                            
                            vending_machine:{label:"Vending Machine",id:'vending_machine',data:'assets/images/vending_icon.png',icontype:'image',directory:'vending_machine',bgcolor:"#e37f4b",class:"",default:false,order:7},

                            meeting_room:{label:"Meeting Room",id:'meeting_room',data:'assets/images/metting_icon.png',icontype:'image',directory:'meeting',bgcolor:"#f8553a",class:"",default:true}
                        };                        



__API_PATH.Hotel_STEPS  =[
                            {label:"Basic Information",id:"default",description:"Fill out basic information of hotel",next:"default"},
                            {label:"Jots",id:"default",description:"You can add or remove the features as per your hotel need",next:"default"},
                            {label:"Departments",id:"default",description:"Add the department your hotel have",next:"default"},
                            {label:"Employees",id:"default",description:"Add your hotel hotel staff",next:"meeting_room"},
                            {label:"Rooms & Common Area",id:"meeting_room",description:"Add rooms & common area",next:"false"}
                        ]; 


 

__API_PATH.JOT_PRIORITY   = [{name:'urgent',class:'urgent'},{name:'high',class:'high'},{name:'medium',class:'medium'},{name:'low',class:'low'}]; 



__API_PATH.DEFAULT_CHECKLIST    =  [
                                        {
                                            name   :"Prepare Room 7 AM @Jon",
                                            sublist:[{name:"tea1"},{name:"tea2"}]
                                        },
                                        {
                                            name   :"Prepare Room 7 AM @Jon2",
                                            sublist:[{name:"tea3"},{name:"tea4"}]
                                        }           
                                    ];




__API_PATH.RECURRING_PATTERN = [
                                    {
                                        label        :"Daily",
                                        id           :"daily",  
                                        description  : "Daily Recurring"                    
                                    },
                                    {
                                        label        :"Weekly",
                                        id           :"weekly",
                                        description  : "Recurring Every Week" 
                                    },
                                    {
                                        label        :"Monthly",
                                        id           :"monthly",
                                        description  : "Recurring Every Month"
                                    },
                                    {
                                        label        :"Yearly",
                                        id           :"yearly",
                                        description  : "Recurring Every Year"
                                    }

                                ]; 


__API_PATH.MONTH = [
                                {
                                    label        : "January",
                                    value        : "1"          
                                },
                                {
                                    label        : "February",
                                    value        : "2"          
                                },
                                {
                                    label        : "March",
                                    value        : "3"          
                                },
                                {
                                    label        : "April",
                                    value        : "4"          
                                },
                                {
                                    label        : "May",
                                    value        : "5"          
                                },
                                {
                                    label        : "June",
                                    value        : "6"          
                                },
                                {
                                    label        : "July",
                                    value        : "7"          
                                },
                                {
                                    label        : "August",
                                    value        : "8"          
                                },
                                {
                                    label        : "September",
                                    value        : "9"          
                                },
                                {
                                    label        : "October",
                                    value        : "10"         
                                },
                                {
                                    label        : "Novemmber",
                                    value        : "11"         
                                },
                                {
                                    label        : "December",
                                    value        : "12"         
                                },

                            ];


__API_PATH.WEEK_NAME = [
                            
                            {
                                label :"Monday",
                                value :'monday',
                            },
                            {
                                label  :"Tuesday",
                                value  :'tuesday'
                            },
                            {
                                label  :"Wednesday",
                                value  :'wednesday'
                            },  
                            {
                                label  :"Thursday",
                                value  :'thursday'
                            },
                            {
                                label  :"Friday",
                                value  :'friday'
                            },
                            {
                                label  :"Saturday",
                                value  :'saturday'
                            },
                            {
                                label :"Sunday",
                                value :'sunday',                        
                            },      
                        ];          

__API_PATH.POSITION = ['Executive Assistant','General Manager','Hotel Manager','Operations Director','Operations Manager','Event Planner','Front Desk Clerk','Housekeeper'];

__API_PATH.CURRENCY_LIST  = {
    "USD": {
        "symbol": "$",
        "name": "US Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
    },
    "CAD": {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
    },
    "EUR": {
        "symbol": "€",
        "name": "Euro",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
    },
    "AED": {
        "symbol": "AED",
        "name": "United Arab Emirates Dirham",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "AED",
        "name_plural": "UAE dirhams"
    },
    "AFN": {
        "symbol": "Af",
        "name": "Afghan Afghani",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "AFN",
        "name_plural": "Afghan Afghanis"
    },
    "ALL": {
        "symbol": "ALL",
        "name": "Albanian Lek",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "ALL",
        "name_plural": "Albanian lekë"
    },
    "AMD": {
        "symbol": "AMD",
        "name": "Armenian Dram",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "AMD",
        "name_plural": "Armenian drams"
    },
    "ARS": {
        "symbol": "AR$",
        "name": "Argentine Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ARS",
        "name_plural": "Argentine pesos"
    },
    "AUD": {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
    },
    "AZN": {
        "symbol": "man.",
        "name": "Azerbaijani Manat",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "AZN",
        "name_plural": "Azerbaijani manats"
    },
    "BAM": {
        "symbol": "KM",
        "name": "Bosnia-Herzegovina Convertible Mark",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BAM",
        "name_plural": "Bosnia-Herzegovina convertible marks"
    },
    "BDT": {
        "symbol": "Tk",
        "name": "Bangladeshi Taka",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BDT",
        "name_plural": "Bangladeshi takas"
    },
    "BGN": {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
    },
    "BHD": {
        "symbol": "BD",
        "name": "Bahraini Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "BHD",
        "name_plural": "Bahraini dinars"
    },
    "BIF": {
        "symbol": "FBu",
        "name": "Burundian Franc",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "BIF",
        "name_plural": "Burundian francs"
    },
    "BND": {
        "symbol": "BN$",
        "name": "Brunei Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BND",
        "name_plural": "Brunei dollars"
    },
    "BOB": {
        "symbol": "Bs",
        "name": "Bolivian Boliviano",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BOB",
        "name_plural": "Bolivian bolivianos"
    },
    "BRL": {
        "symbol": "R$",
        "name": "Brazilian Real",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
    },
    "BWP": {
        "symbol": "BWP",
        "name": "Botswanan Pula",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BWP",
        "name_plural": "Botswanan pulas"
    },
    "BYR": {
        "symbol": "BYR",
        "name": "Belarusian Ruble",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "BYR",
        "name_plural": "Belarusian rubles"
    },
    "BZD": {
        "symbol": "BZ$",
        "name": "Belize Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BZD",
        "name_plural": "Belize dollars"
    },
    "CDF": {
        "symbol": "CDF",
        "name": "Congolese Franc",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "CDF",
        "name_plural": "Congolese francs"
    },
    "CHF": {
        "symbol": "CHF",
        "name": "Swiss Franc",
          "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
    },
    "CLP": {
        "symbol": "CL$",
        "name": "Chilean Peso",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CLP",
        "name_plural": "Chilean pesos"
    },
    "CNY": {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
    },
    "COP": {
        "symbol": "CO$",
        "name": "Colombian Peso",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "COP",
        "name_plural": "Colombian pesos"
    },
    "CRC": {
        "symbol": "₡",
        "name": "Costa Rican Colón",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "CRC",
        "name_plural": "Costa Rican colóns"
    },
    "CVE": {
        "symbol": "CV$",
        "name": "Cape Verdean Escudo",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "CVE",
        "name_plural": "Cape Verdean escudos"
    },
    "CZK": {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
    },
    "DJF": {
        "symbol": "Fdj",
        "name": "Djiboutian Franc",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "DJF",
        "name_plural": "Djiboutian francs"
    },
    "DKK": {
        "symbol": "Dkr",
        "name": "Danish Krone",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
    },
    "DOP": {
        "symbol": "RD$",
        "name": "Dominican Peso",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "DOP",
        "name_plural": "Dominican pesos"
    },
    "DZD": {
        "symbol": "DA",
        "name": "Algerian Dinar",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "DZD",
        "name_plural": "Algerian dinars"
    },
    "EEK": {
        "symbol": "Ekr",
        "name": "Estonian Kroon",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "EEK",
        "name_plural": "Estonian kroons"
    },
    "EGP": {
        "symbol": "EGP",
        "name": "Egyptian Pound",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "EGP",
        "name_plural": "Egyptian pounds"
    },
    "ERN": {
        "symbol": "Nfk",
        "name": "Eritrean Nakfa",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "ERN",
        "name_plural": "Eritrean nakfas"
    },
    "ETB": {
        "symbol": "Br",
        "name": "Ethiopian Birr",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "ETB",
        "name_plural": "Ethiopian birrs"
    },
    "GBP": {
        "symbol": "£",
        "name": "British Pound Sterling",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
    },
    "GEL": {
        "symbol": "GEL",
        "name": "Georgian Lari",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "GEL",
        "name_plural": "Georgian laris"
    },
    "GHS": {
        "symbol": "GH₵",
        "name": "Ghanaian Cedi",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "GHS",
        "name_plural": "Ghanaian cedis"
    },
    "GNF": {
        "symbol": "FG",
        "name": "Guinean Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "GNF",
        "name_plural": "Guinean francs"
    },
    "GTQ": {
        "symbol": "GTQ",
        "name": "Guatemalan Quetzal",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GTQ",
        "name_plural": "Guatemalan quetzals"
    },
    "HKD": {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
    },
    "HNL": {
        "symbol": "HNL",
        "name": "Honduran Lempira",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HNL",
        "name_plural": "Honduran lempiras"
    },
    "HRK": {
        "symbol": "kn",
        "name": "Croatian Kuna",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
    },
    "HUF": {
        "symbol": "Ft",
        "name": "Hungarian Forint",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
    },
    "IDR": {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
    },
    "ILS": {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
    },
    "INR": {
        "symbol": "Rs",
        "name": "Indian Rupee",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
    },
    "IQD": {
        "symbol": "IQD",
        "name": "Iraqi Dinar",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "IQD",
        "name_plural": "Iraqi dinars"
    },
    "IRR": {
        "symbol": "IRR",
        "name": "Iranian Rial",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IRR",
        "name_plural": "Iranian rials"
    },
    "ISK": {
        "symbol": "Ikr",
        "name": "Icelandic Króna",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "ISK",
        "name_plural": "Icelandic krónur"
    },
    "JMD": {
        "symbol": "J$",
        "name": "Jamaican Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "JMD",
        "name_plural": "Jamaican dollars"
    },
    "JOD": {
        "symbol": "JD",
        "name": "Jordanian Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "JOD",
        "name_plural": "Jordanian dinars"
    },
    "JPY": {
        "symbol": "¥",
        "name": "Japanese Yen",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
    },
    "KES": {
        "symbol": "Ksh",
        "name": "Kenyan Shilling",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "KES",
        "name_plural": "Kenyan shillings"
    },
    "KHR": {
        "symbol": "KHR",
        "name": "Cambodian Riel",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "KHR",
        "name_plural": "Cambodian riels"
    },
    "KMF": {
        "symbol": "CF",
        "name": "Comorian Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "KMF",
        "name_plural": "Comorian francs"
    },
    "KRW": {
        "symbol": "₩",
        "name": "South Korean Won",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
    },
    "KWD": {
        "symbol": "KD",
        "name": "Kuwaiti Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "KWD",
        "name_plural": "Kuwaiti dinars"
    },
    "KZT": {
        "symbol": "KZT",
        "name": "Kazakhstani Tenge",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "KZT",
        "name_plural": "Kazakhstani tenges"
    },
    "LBP": {
        "symbol": "LB£",
        "name": "Lebanese Pound",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "LBP",
        "name_plural": "Lebanese pounds"
    },
    "LKR": {
        "symbol": "SLRs",
        "name": "Sri Lankan Rupee",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "LKR",
        "name_plural": "Sri Lankan rupees"
    },
    "LTL": {
        "symbol": "Lt",
        "name": "Lithuanian Litas",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "LTL",
        "name_plural": "Lithuanian litai"
    },
    "LVL": {
        "symbol": "Ls",
        "name": "Latvian Lats",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "LVL",
        "name_plural": "Latvian lati"
    },
    "LYD": {
        "symbol": "LD",
        "name": "Libyan Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "LYD",
        "name_plural": "Libyan dinars"
    },
    "MAD": {
        "symbol": "MAD",
        "name": "Moroccan Dirham",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "MAD",
        "name_plural": "Moroccan dirhams"
    },
    "MDL": {
        "symbol": "MDL",
        "name": "Moldovan Leu",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MDL",
        "name_plural": "Moldovan lei"
    },
    "MGA": {
        "symbol": "MGA",
        "name": "Malagasy Ariary",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "MGA",
        "name_plural": "Malagasy Ariaries"
    },
    "MKD": {
        "symbol": "MKD",
        "name": "Macedonian Denar",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MKD",
        "name_plural": "Macedonian denari"
    },
    "MMK": {
        "symbol": "MMK",
        "name": "Myanma Kyat",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "MMK",
        "name_plural": "Myanma kyats"
    },
    "MOP": {
        "symbol": "MOP$",
        "name": "Macanese Pataca",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "MOP",
        "name_plural": "Macanese patacas"
    },
    "MUR": {
        "symbol": "MURs",
        "name": "Mauritian Rupee",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "MUR",
        "name_plural": "Mauritian rupees"
    },
    "MXN": {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
    },
    "MYR": {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
    },
    "MZN": {
        "symbol": "MTn",
        "name": "Mozambican Metical",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "MZN",
        "name_plural": "Mozambican meticals"
    },
    "NAD": {
        "symbol": "N$",
        "name": "Namibian Dollar",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NAD",
        "name_plural": "Namibian dollars"
    },
    "NGN": {
        "symbol": "₦",
        "name": "Nigerian Naira",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NGN",
        "name_plural": "Nigerian nairas"
    },
    "NIO": {
        "symbol": "C$",
        "name": "Nicaraguan Córdoba",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NIO",
        "name_plural": "Nicaraguan córdobas"
    },
    "NOK": {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
    },
    "NPR": {
        "symbol": "NPRs",
        "name": "Nepalese Rupee",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "NPR",
        "name_plural": "Nepalese rupees"
    },
    "NZD": {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
    },
    "OMR": {
        "symbol": "OMR",
        "name": "Omani Rial",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "OMR",
        "name_plural": "Omani rials"
    },
    "PAB": {
        "symbol": "B/.",
        "name": "Panamanian Balboa",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "PAB",
        "name_plural": "Panamanian balboas"
    },
    "PEN": {
        "symbol": "S/.",
        "name": "Peruvian Nuevo Sol",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "PEN",
        "name_plural": "Peruvian nuevos soles"
    },
    "PHP": {
        "symbol": "₱",
        "name": "Philippine Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
    },
    "PKR": {
        "symbol": "PKRs",
        "name": "Pakistani Rupee",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PKR",
        "name_plural": "Pakistani rupees"
    },
    "PLN": {
        "symbol": "zł",
        "name": "Polish Zloty",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
    },
    "PYG": {
        "symbol": "₲",
        "name": "Paraguayan Guarani",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "PYG",
        "name_plural": "Paraguayan guaranis"
    },
    "QAR": {
        "symbol": "QR",
        "name": "Qatari Rial",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "QAR",
        "name_plural": "Qatari rials"
    },
    "RON": {
        "symbol": "RON",
        "name": "Romanian Leu",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
    },
    "RSD": {
        "symbol": "din.",
        "name": "Serbian Dinar",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "RSD",
        "name_plural": "Serbian dinars"
    },
    "RUB": {
        "symbol": "RUB",
        "name": "Russian Ruble",
           "decimal_digits": 2,
        "rounding": 0,
        "code": "RUB",
        "name_plural": "Russian rubles"
    },
    "RWF": {
        "symbol": "RWF",
        "name": "Rwandan Franc",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "RWF",
        "name_plural": "Rwandan francs"
    },
    "SAR": {
        "symbol": "SR",
        "name": "Saudi Riyal",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "SAR",
        "name_plural": "Saudi riyals"
    },
    "SDG": {
        "symbol": "SDG",
        "name": "Sudanese Pound",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "SDG",
        "name_plural": "Sudanese pounds"
    },
    "SEK": {
        "symbol": "Skr",
        "name": "Swedish Krona",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
    },
    "SGD": {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
    },
    "SOS": {
        "symbol": "Ssh",
        "name": "Somali Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "SOS",
        "name_plural": "Somali shillings"
    },
    "SYP": {
        "symbol": "SY£",
        "name": "Syrian Pound",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "SYP",
        "name_plural": "Syrian pounds"
    },
    "THB": {
        "symbol": "฿",
        "name": "Thai Baht",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
    },
    "TND": {
        "symbol": "DT",
        "name": "Tunisian Dinar",
            "decimal_digits": 3,
        "rounding": 0,
        "code": "TND",
        "name_plural": "Tunisian dinars"
    },
    "TOP": {
        "symbol": "T$",
        "name": "Tongan Paʻanga",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "TOP",
        "name_plural": "Tongan paʻanga"
    },
    "TRY": {
        "symbol": "TL",
        "name": "Turkish Lira",
         "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
    },
    "TTD": {
        "symbol": "TT$",
        "name": "Trinidad and Tobago Dollar",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TTD",
        "name_plural": "Trinidad and Tobago dollars"
    },
    "TWD": {
        "symbol": "NT$",
        "name": "New Taiwan Dollar",
          "decimal_digits": 2,
        "rounding": 0,
        "code": "TWD",
        "name_plural": "New Taiwan dollars"
    },
    "TZS": {
        "symbol": "TSh",
        "name": "Tanzanian Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "TZS",
        "name_plural": "Tanzanian shillings"
    },
    "UAH": {
        "symbol": "₴",
        "name": "Ukrainian Hryvnia",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UAH",
        "name_plural": "Ukrainian hryvnias"
    },
    "UGX": {
        "symbol": "USh",
        "name": "Ugandan Shilling",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "UGX",
        "name_plural": "Ugandan shillings"
    },
    "UYU": {
        "symbol": "$U",
        "name": "Uruguayan Peso",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "UYU",
        "name_plural": "Uruguayan pesos"
    },
    "UZS": {
        "symbol": "UZS",
        "name": "Uzbekistan Som",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "UZS",
        "name_plural": "Uzbekistan som"
    },
    "VEF": {
        "symbol": "Bs.F.",
        "name": "Venezuelan Bolívar",
            "decimal_digits": 2,
        "rounding": 0,
        "code": "VEF",
        "name_plural": "Venezuelan bolívars"
    },
    "VND": {
        "symbol": "₫",
        "name": "Vietnamese Dong",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "VND",
        "name_plural": "Vietnamese dong"
    },
    "XAF": {
        "symbol": "FCFA",
        "name": "CFA Franc BEAC",
           "decimal_digits": 0,
        "rounding": 0,
        "code": "XAF",
        "name_plural": "CFA francs BEAC"
    },
    "XOF": {
        "symbol": "CFA",
        "name": "CFA Franc BCEAO",
          "decimal_digits": 0,
        "rounding": 0,
        "code": "XOF",
        "name_plural": "CFA francs BCEAO"
    },
    "YER": {
        "symbol": "YR",
        "name": "Yemeni Rial",
            "decimal_digits": 0,
        "rounding": 0,
        "code": "YER",
        "name_plural": "Yemeni rials"
    },
    "ZAR": {
        "symbol": "R",
        "name": "South African Rand",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
    },
    "ZMK": {
        "symbol": "ZK",
        "name": "Zambian Kwacha",
         "decimal_digits": 0,
        "rounding": 0,
        "code": "ZMK",
        "name_plural": "Zambian kwachas"
    }
};




__API_PATH.COLOR_CODE = {
              "antiquewhite": "#faebd7",             
              "beige": "#f5f5dc",
              "bisque": "#ffe4c4",
              "blanchedalmond": "#ffebcd",
            
              "burlywood": "#deb887",
              "cadetblue": "#5f9ea0",
              "chartreuse": "#7fff00",
              "chocolate": "#d2691e",
              "coral": "#ff7f50",
              "cornflowerblue": "#6495ed",
              "cornsilk": "#fff8dc",
              "crimson": "#dc143c",
              "cyan": "#00ffff",           
              "darkcyan": "#008b8b",
              "darkgoldenrod": "#b8860b",
              "darkgray": "#a9a9a9",              
              "darkgrey": "#a9a9a9",
              "darkkhaki": "#bdb76b",
                        
              "darkorange": "#ff8c00",
                           
              "darksalmon": "#e9967a",
              "darkseagreen": "#8fbc8f",                          
              "darkturquoise": "#00ced1",
              
              "deeppink": "#ff1493",
              "deepskyblue": "#00bfff", 
              "dodgerblue": "#1e90ff",
              
              "floralwhite": "#fffaf0",
              "forestgreen": "#228b22",
              "fuchsia": "#ff00ff",
              "gainsboro": "#dcdcdc",
              "ghostwhite": "#f8f8ff",
              "gold": "#ffd700",
              "goldenrod": "#daa520",                           
              "greenyellow": "#adff2f",
              "grey": "#808080",
              "honeydew": "#f0fff0",
              "hotpink": "#ff69b4",
              "indianred": "#cd5c5c",
              "ivory": "#fffff0",
              "khaki": "#f0e68c",
              "lavender": "#e6e6fa",
              "lavenderblush": "#fff0f5",
              "lawngreen": "#7cfc00",
              "lemonchiffon": "#fffacd",
              "lightblue": "#add8e6",
              "lightcoral": "#f08080",
              "lightcyan": "#e0ffff",
              "lightgoldenrodyellow": "#fafad2",
              "lightgray": "#d3d3d3",
              "lightgreen": "#90ee90",
              "lightgrey": "#d3d3d3",
              "lightpink": "#ffb6c1",
              "lightsalmon": "#ffa07a",
              "lightseagreen": "#20b2aa",
              "lightskyblue": "#87cefa",
            
             
              "lightsteelblue": "#b0c4de",
              "lightyellow": "#ffffe0",
              "lime": "#00ff00",
              "limegreen": "#32cd32",
              "linen": "#faf0e6",
              "magenta": "#ff00ff",             
              "mediumaquamarine": "#66cdaa",
              "mediumorchid": "#ba55d3",
              "mediumpurple": "#9370db",
              "mediumseagreen": "#3cb371",
              "mediumslateblue": "#7b68ee",
              "mediumspringgreen": "#00fa9a",
              "mediumturquoise": "#48d1cc",
             
              "mintcream": "#f5fffa",
              "mistyrose": "#ffe4e1",
              "moccasin": "#ffe4b5",
              "navajowhite": "#ffdead",
              "oldlace": "#fdf5e6",
              "olive": "#808000",
              "olivedrab": "#6b8e23",
              "orange": "#ffa500",
              
              "orchid": "#da70d6",
              "palegoldenrod": "#eee8aa",
              "palegreen": "#98fb98",
              "paleturquoise": "#afeeee",
              "palevioletred": "#db7093",
              "papayawhip": "#ffefd5",
              "peachpuff": "#ffdab9",
              "peru": "#cd853f",
              "pink": "#ffc0cb",
              "plum": "#dda0dd",
              "powderblue": "#b0e0e6",                            
              "red": "#ff0000",
              "rosybrown": "#bc8f8f",
              "royalblue": "#4169e1",
             
              "salmon": "#fa8072",
              "sandybrown": "#f4a460",
              "seagreen": "#2e8b57",
              "seashell": "#fff5ee",
     
              "silver": "#c0c0c0",
              "skyblue": "#87ceeb",
              
              "snow": "#fffafa",
              "springgreen": "#00ff7f",
              "steelblue": "#4682b4",
              "tan": "#d2b48c",
              
              "thistle": "#d8bfd8",
              "tomato": "#ff6347",
              "turquoise": "#40e0d0",
              "violet": "#ee82ee",
              "wheat": "#f5deb3",
              "white": "#ffffff",
              "whitesmoke": "#f5f5f5",
              "yellow": "#ffff00",
              "yellowgreen": "#9acd32"
            };






__API_PATH.DEFAULT_DEPARTMENT  = [
                                    {department_name:"Housekeeper", abbreviation:"H/K",checked:true},
                                    {department_name:"Electric", abbreviation:"ELEC",checked:true},
                                    {department_name:"Mechanical", abbreviation:"MACH",checked:true},
                                    {department_name:"Account", abbreviation:"A/C"},
                                    {department_name:"Admin", abbreviation:"ADMIN"},
                                    
                                 ];

'use strict';

app.factory('AuthSrv', function ($rootScope) {
    var auth = {
        isLogged: false
    };

    return auth;
});
'use strict';


/*Angular interceptors are service factories that are registered with the $httpProvider */
app.config(['$httpProvider', function($httpProvider){
	var interceptor = ['$q', '$location','localStorageService','AuthSrv','$rootScope', function ($q, $location,localStorageService,AuthSrv,$rootScope) {

		/* Get the application storage type default (localstorage) */
		return {
			request: function (config) {

                config.headers = config.headers || {};
				var token = localStorageService.get('token');
				if (token) {
					config.headers.Authorization = 'Bearer '+ token;
					AuthSrv.isLogged = 1;
				}
				return config;
			},

			requestError: function (rejection) {
				return $q.reject(rejection);
			},

			response: function (response) {
				return response || $q.when(response);
			},

            // Revoke client authentication if 400 is received
            responseError: function (rejection) {
            	return $q.reject(rejection);
            }
        };
    }];

    $httpProvider.interceptors.push(interceptor);
}])

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}])



.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
   
   var hostname = window.location.hostname, prefix;
   switch(hostname) {
        case 'localhost':
            prefix = 'admin_local';
            break;
        default:
            prefix = 'default';
   }  
 localStorageServiceProvider.setPrefix(prefix);

}])
.run(['$location','$rootScope','localStorageService','AuthSrv','$templateCache','$cookies',
	function($location, $rootScope,localStorageService,AuthSrv,$templateCache,$cookies){ 	        
        
        $rootScope.$on("$routeChangeStart", 
            function (event, nextRoute, currentRoute) { 

                $rootScope.hideclass            = 'hideclass';
                $rootScope.currentPage          = $location.$$path;
                $rootScope.activeHotelData      = localStorageService.get('hotel');
                $rootScope.currentUser          = localStorageService.get('user');
                

                /*************************************************
                * Login Remember & redirect user if cookie not set
                *************************************************/

                if(nextRoute.$$route){
                    if(nextRoute.$$route.access){
                        $rootScope.isAuth = nextRoute.$$route.access;
                   } 
                } 
                



               if(!( $cookies.get("hoteljot") && ($cookies.get("hoteljot") == window.btoa('rememberloggedin') || $cookies.get("hoteljot") == window.btoa('sessionloggedin'))  )){

                    localStorageService.remove('token');
                    localStorageService.remove('user');
                    localStorageService.remove('hotel');
                    $cookies.remove("hoteljot");
                    delete $rootScope.user;
                    AuthSrv.isLogged = false;
               }
              


                if ( nextRoute !== null && nextRoute.access !== undefined && nextRoute.access.requiredLogin  && !AuthSrv.isLogged && !localStorageService.get('user')) {
                    AuthSrv.isLogged = 0;                  
                    $location.path("/");
                }



                $rootScope.$watch(function(newValue, oldValue) {
                    $rootScope.logggedin = AuthSrv.isLogged;                   
                });
                $rootScope.$broadcast('handleSidebar'); 

        });

        $rootScope.$on("$routeChangeSuccess", function(event, next, current) {
          $rootScope.hideclass = '';
          $templateCache.removeAll(); 

          
        });


    	
    	/* This will logout the user from the application */
    	$rootScope.clearToken = function () {
            localStorageService.remove('token');
            localStorageService.remove('user');
            localStorageService.remove('hotel');
            $cookies.remove("hoteljot");
            delete $rootScope.user;
            AuthSrv.isLogged = false;
            $location.path('/');
        };

        // $rootScope.$on( 'TokenExpiredError', function( event, eventData ) {
        //    toastService.alert( {message: eventData.message , class: 'error'});
        // });
        
        /* Set user for entire application */
    	//$rootScope.admin = localStorageService.get('admin');

	
}]);

"use strict";

app.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
    $routeProvider
    
    .when("/", {
        templateUrl: "/modules/home/views/home.html",
        controller: "homeController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/invitation/:data", {
        templateUrl: "/modules/home/views/home.html",
        controller: "homeController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/about-us", {
        templateUrl: "/modules/about/views/about-us.html",
        controller: "aboutUsCtrl",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })

    .when("/contact-us", {
        templateUrl: "/modules/contact/views/contact.html",
        controller: "contactController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })


    .when("/faq", {
        templateUrl: "/modules/faq/views/faq.html",
        controller : "faqController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
             sidebar: 'no',
             footer:'yes',
        }
    })

    .when("/demo", {
        templateUrl: "/modules/demo/views/demo.html",
        controller: "demoController",
        access: {
            requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })


    .when("/login", {
        templateUrl : "/modules/login/views/login.tpl.html",
        controller: "loginController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
     .when("/resetpassword/:token", {
        templateUrl : "/modules/login/views/resetpassword.html",
        controller  :  "resetPasswordCtlr",
        access: {
           requiredLogin: false,
            headerType:'front_header',
            sidebar: 'no',
            footer:'yes',
        }
    })    

    .when("/register", {
        templateUrl : "/modules/register/views/register.tpl.html",
        controller  :  "registerController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })
    .when("/dashboard", {
        templateUrl : "/modules/dashboard/views/dashboard-home.html",
        controller  :  "dashboardController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true, 
            headerType:'hotel_header',
            sidebar: 'yes',
            outside:'yes'
        }
    })


    /*.when("/invitation", {
        templateUrl : "/modules/invitation/views/invitation.html",
        controller  :  "invitationController",
        access: {
            requiredLogin: false,
             sidebar: 'no',
        }
    })*/

    .when("/dashboard/hotel-setup/:steps?", {
        templateUrl : "/modules/dashboard/views/steps.html",
        controller  :  "hotelSetupController",
        access: {
           requiredLogin: false,
            headerType:'hotel_header',
            sidebar: 'no',
        }
    })


    .when("/dashboard/hotelboard/:type?", {
        templateUrl : "/modules/jot/views/hotelboard.html",
        //controller  :  "dashboardController",
        controller  :  "hotelBoardController",
        access: {
            requiredLogin: true, 
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

  
    .when("/dashboard/employee", {
        templateUrl : "/modules/employee/views/employee.html",
        controller  :  "employeeController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/position", {
        templateUrl : "/modules/employee/views/position.html",
        controller  :  "positionController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/employee-schedule", {
        templateUrl : "/modules/employee/views/scheduler.html",
        controller  :  "schedulerController",
        controllerAs  :  "ctlr",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/department", {
        templateUrl : "/modules/department/views/department.html",
        controller  :  "departmentController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/inventory", {
        templateUrl : "/modules/vending_machine/views/inventory.html",
        controller  :  "inventoryController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/inventory-category", {
        templateUrl   : "/modules/vending_machine/views/inventory_category.html",
        controller    : "inventoryCatController",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/lost-found", {
        templateUrl   : "/modules/lost_found/views/lost_found_management.html",
        controller    : "lostFoundManagementController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/profile", {
        templateUrl   : "/modules/profile/views/profile.html",
        controller    : "profileController",
        access: {
            requiredLogin: true,
            headerType:'hotel_header',
            sidebar: 'no'
        }
    })

    .when("/dashboard/phone-directory", {
        templateUrl   : "/modules/phone_directory/views/phone_directory.html",
        controller    : "phoneDirController",
        controllerAs  : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/document-center", {
        templateUrl   : "/modules/document_center/views/document_center.html",
        controller    : "documentCenterController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/alerts", {
        templateUrl   : "/modules/alerts/views/alerts.html",
        controller    : "alertsController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/sales-report", {
        templateUrl   : "/modules/reports/views/reports.html",
        controller    : "reportsController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

    .when("/dashboard/booking-report", {
        templateUrl   : "/modules/meeting/views/reports.html",
        controller    : "bookingReportController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })
    .when("/dashboard/meeting-rooms", {
        templateUrl   : "/modules/meeting/views/meeting_room_management.html",
        controller    : "meetingManagementController",
        controllerAs    : "ctrl",
        access: {
            requiredLogin: true,
            headerType:'dashboard_header',
            sidebar: 'yes'
        }
    })

   .otherwise({
    redirectTo: '/modules/error/views/404.html'

    });
        $locationProvider.html5Mode(true);     
    }]);
"use strict";

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default');

    $mdThemingProvider.definePalette('hoteljot', {
    '50': 'ffbb42',
    '100': 'ffbb42',
    '200': 'ffbb42',
    '300': 'ffbb42',
    '400': 'ffbb42',
    '500': 'ffbb42',
    '600': 'ffbb42',
    '700': 'ffbb42',
    '800': 'ffbb42',
    '900': 'ffbb42',
    'A100': 'ffbb42',
    'A200': 'ffbb42',
    'A400': 'ffbb42',
    'A700': 'ffbb42',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('hoteljot')
    .accentPalette('blue');
});
"use strict";

app.controller('aboutUsCtrl',['$scope',
	function($scope){
}]);
"use strict";

app.controller('alertsController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService','socket',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService,socket) {
		
		/************************************
		* Get alert list
		*************************************/

		globalRequest.getAlertList();

		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.title = "";		
			$scope.description = "";		
			
		};	



		/************************************
		* Add alert
		*************************************/		
		

		$scope.addAlert = function(){	

		/*socket.emit('notification2','hello');
		return false;	*/	

			var request = {
			            url:window.__API_PATH.ADD_ALERT,
			            method:"POST",
			            data:{
			            	hotel_id     :  $rootScope.activeHotelData._id,
			            	title        :  $scope.alert_title,	            	
			            	description  :  $scope.alert_description,
			            	user_id      :  $rootScope.currentUser._id,
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
				
			 	if(response.status == 1)
			 	{
			 		$scope.blank();			 		
			 		socket.emit('notification',response.result);
			 		
			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);		 		
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};
		
	}
]);






"use Strict";

app.controller('contactController',['$scope',
	function($scope){

}]);
"use strict";

app.controller('dashboardController', ['$scope','$location','localStorageService','$rootScope','$mdDialog','toastService','globalRequest',
	function($scope,$location, localStorageService,$rootScope,$mdDialog,toastService,globalRequest) {

		/* socket.on("message", function(data){
		    console.log(data);
		});
*/



		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();



		/*
		* Function
		*
		* Open popup to add new hotel.
		*
		*/


		$scope.openHotelSetupWizard = function(){
			localStorageService.remove('processingHotel');
			$location.path('/dashboard/hotel-setup/1');	
		};		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		


		$scope.redirectToJot = function(hotel){
			
			globalRequest.getHotelStatus(hotel._id).then(function(response){				

				var completedStep;	

				if(response[0].step != 'completed')
				{
					if(response[0].jot_types.length == 0)
					{
						completedStep = 2;

					} else if(response[0].departments.length == 0) {
						completedStep = 3;

					} else if(response[0].members.length == 0) {
						completedStep = 4;

					} else if(response[0].rooms.length == 0) {	
						completedStep = 5;
						
					} else {
						completedStep = 'completed';
					}
				} else {
					completedStep = 'completed';
				}

				

				if(completedStep == 'completed')
				{
					localStorageService.set('hotel', hotel);			
					$location.path('/dashboard/hotelboard');
					
				} else {
					localStorageService.set('processingHotel',hotel);
					$location.path('/dashboard/hotel-setup');
				}


			});
		};


		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openHotelEditForm = function($event, detail){
			$event.stopPropagation();			
			$mdDialog.show({
				controller: 'hotelEditController',
				templateUrl: '/modules/dashboard/views/edit_hotel.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{hotelDetail: detail}				
			}).then(function(answer) {}, function() {});

		};


		/*
		* Function
		*
		* Delete hotels
		*
		*/
		
		
		$scope.deleteHotel = function(hotelID,index){
			
				
			if($rootScope.activeHotelData && $rootScope.activeHotelData._id == hotelID)
			{
				localStorageService.remove('hotel');
			}	

			var data = {
				"hotel_id":hotelID
			};
			var request={
					url:window.__API_PATH.DELETE_HOTEL,
					method:"DELETE",
					params:data
				};
			
			globalRequest.jotCRUD(request).then(function(response){
				if(response.status == 1)
				{
					$scope.hotels.splice(index, 1);
					var popup = {"message":response.message,"class":"success"};
					toastService.alert(popup);
				}
			});		


		};


	}
]);

"use strict";

app.controller('hotelEditController', ['$scope','$timeout','globalRequest','$mdDialog','toastService','hotelDetail',
	function($scope,$timeout,globalRequest,$mdDialog,toastService,hotelDetail) {	


		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;
		$scope.countryList  = window.countryList;
		var stateList       = window.stateList;
		
		/************************************************
		* Change states according to country
		*************************************************/

		$scope.populateState = function(countryName){
			var countryIndex = $scope.countryList.indexOf(countryName);
			$scope.stateList = stateList[countryIndex+1].split('|');
		};

		/***********************************************
		* Take hotel details in current scope
		***********************************************/

		angular.forEach(hotelDetail,function (value,key) {
		    if(key == 'country'){
		    	$scope.populateState(value);
		    }
		    $scope[key] = value;
		});		
		

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/

		$scope.close = function(){
			 $mdDialog.cancel();
		};

		/***********************************************
		* Update hotel information
		***********************************************/

		$scope.editNewHotel = function(){

			var hotelDataObj = {
			 		hotel_id     	   : $scope._id,
					hotelname          : $scope.hotelname,
					ownername          : $scope.ownername,
					currency           : $scope.currency,
					email              : $scope.email,
					phone              : $scope.phone,
					address            : $scope.address,
					city               : $scope.city,
					zipcode            : $scope.zipcode,
					state              : $scope.state,
					country            : $scope.country	
				};

			var request={
					url:window.__API_PATH.UPDATE_HOTEL,
					method:"PUT",
					data:hotelDataObj
				};


				/***********************************************
				* Upload bachground image
				***********************************************/

				if($scope.uploaedImgage)
				{					
				
					globalRequest.uploadFiles($scope._id,'cover',$scope.uploaedImgage).then(function (response) {
					
	                $timeout(function () {	                 
	                	request.data.image = response.result[0].filename;


	                	/***********************************************
						* Update hotel info with bachground image
						***********************************************/                 	

		                globalRequest.jotCRUD(request).then(function(updateResponse){
							var popup;							
							if(updateResponse.status == 1)
							{
								globalRequest.getHotels();
								$mdDialog.cancel();
								popup = {"message":updateResponse.message,"class":"success"};
								toastService.alert(popup);
							} else {
								var errors = '';
								angular.forEach(updateResponse.errors,function(value,key){
									errors += value.message+'<br>';
								});
								popup = {"message":errors,"class":""};
								toastService.errors(popup);						
							}

						});

	                });
	            });

				} else {


					/***********************************************
					* Update hotel info without bachground image
					***********************************************/


					globalRequest.jotCRUD(request).then(function(response){	
						var popup;
						if(response.status == 1)
						{
							globalRequest.getHotels();
							$mdDialog.cancel();
							popup = {"message":response.message,"class":"success"};
							toastService.alert(popup);
						} else {
							var errors = '';
							angular.forEach(response.errors,function(value,key){
								errors += value.message+'<br>';
							});
							popup = {"message":errors,"class":""};
							toastService.errors(popup);						
						}
					});

				}	
							
			
		};


		/*****************************************
		* Hotel image upload
		*****************************************/	

		$scope.$watch('files', function () {
        	$scope.uploadCover($scope.files);
	    });

	    $scope.$watch('file', function () {
	        if ($scope.file != null) {
	            $scope.files = [$scope.file];
	        }
	    });

	    $scope.uploadCover = function(files, errFiles) {
	    	if(files)
	    	{
				$scope.uploaedImgage = files[0];
			}

	    };
		
	}
]);



"use strict";

app.controller('hotelSetupController', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService) {	

		$rootScope.newProcessingHotel   = localStorageService.get('processingHotel');

		/*********   Get setup steps  ************/

		$scope.hotelStepList = window.__API_PATH.Hotel_STEPS;

		
		/*********   Get hotel setup wizard current hotel  ************/		
		
		if($rootScope.currentUser.role != 'hotelowner')
		{
			$location.path('/dashboard');
			return;
		}

		if(!$rootScope.newProcessingHotel)	
		{			
			/*********   Redirect if no hotel is in wizard  ************/

			$location.path('/dashboard/hotel-setup/1');
			//return false;

		} else {


			/**************************************************
			* Check hotel blank steps
			***************************************************/

			globalRequest.getHotelStatus($rootScope.newProcessingHotel._id).then(function(response){

				$scope.addedEmployee       = [];
				$scope.selectedDepartment  = [];

				$rootScope.hotelStatus	   = response[0];
				$scope.selectedDepartment  = response[0].departments;
				$scope.addedEmployee       = response[0].members;




				
	
				var completedStep = 1;
				var redirectPath = '/dashboard';

				if(response[0].step != 'completed')
				{
					if(response[0].jot_types.length == 0)
					{
						completedStep = 2;

					} else if(response[0].departments.length == 0) {
						completedStep = 3;

					} else if(response[0].members.length == 0) {
						completedStep = 4;

					} else if(response[0].rooms.length == 0) {
						completedStep = 5;
					} else {
						completedStep = 'completed';
					}
					

				} else {
					
					completedStep = 'completed';
				}

				
				$scope.ActiveStep = $routeParams.steps;

				if(completedStep != 'completed')
				{			


					/**************************************************
					* Redirect on step from where user left the process
					***************************************************/

					if($scope.ActiveStep)
					{
						if($scope.ActiveStep > completedStep)
						{						
							redirectPath = '/dashboard/hotel-setup/'+completedStep;
						} else if($scope.ActiveStep <= completedStep){

							redirectPath = '/dashboard/hotel-setup/'+$scope.ActiveStep;
						}
					} else {					
						redirectPath = '/dashboard/hotel-setup/'+completedStep;
					}
				} else {

					/***********************************************************			
					* Clear the wizard procession data from localStorageService
					* Redirect on dashboard if all steps completed
					***********************************************************/

				   localStorageService.remove('processingHotel');
				   redirectPath = '/dashboard';
				}


				$location.path(redirectPath);

				
				/*********   Check Next step exixts  ************/

				var getNextStepID = $scope.hotelStepList[$routeParams.steps-1].next;
				if($rootScope.hotelStatus.jot_types.indexOf(getNextStepID) >-1 )
				{
					$rootScope.nextStep  = true;
				} else {				
					$rootScope.nextStep  = false;
				}

				if(redirectPath == '/dashboard')
				{
					return false;
				}

			});
			
		}

		

		

		/***********************************************************			
		* Render page template according to step in route url			
		***********************************************************/
		$scope.ActiveStep = $routeParams.steps;

		if($scope.ActiveStep)
		{
			$scope.stepsTemplate = '/modules/dashboard/views/step'+$routeParams.steps+'.html';
		}
				
	}
]);

"use strict";

app.controller('step1Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','localStorageService','$timeout','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,localStorageService,$timeout,toastService) {	
		var hotelData       = localStorageService.get('processingHotel');

		$scope.currencyList = window.__API_PATH.CURRENCY_LIST;
		$scope.countryList  = window.countryList;
		var stateList       = window.stateList;
		
		/************************************************
		* Change states according to country
		*************************************************/


		$scope.populateState = function(countryName){
			var countryIndex = $scope.countryList.indexOf(countryName);
			$scope.stateList = stateList[countryIndex+1].split('|');
		};
		
		/************************************************
		* Append value if hotel already exists
		*************************************************/
		$scope.checked = false;
		if(hotelData)
		{

			globalRequest.getHotelStatus(hotelData._id).then(function(response){
					angular.forEach(response[0],function (value,key) {	
						$scope[key] = value;												    
					});

			});
			$scope.checked = true;
		}

		/************************************************
		* Step1 submit to create the hotel
		*************************************************/

		$scope.step1FormSubmit = function(){			
			
			var acceptTerm = $scope.terms;	
			
			$scope.hotelResult = {class:"",message:"",status:""};
			if(acceptTerm)
			{
				$rootScope.hoteljotLoader = true;


				 var hotelDataObj = {
				 		user_id     	   : $rootScope.currentUser._id,
						hotelname          : $scope.hotelname,
						ownername          : $scope.ownername,
						currency           : $scope.currency,
						email              : $scope.email,
						phone              : $scope.phone,
						address            : $scope.address,
						city               : $scope.city,
						zipcode            : $scope.zipcode,
						state              : $scope.state,
						country            : $scope.country,
						hotel_id		   : null						
				};


				var request={
						url:window.__API_PATH.ADD_HOTEL,
						method:"POST",
						data:hotelDataObj
					};

				if(hotelData)
				{
					request.url 		  = window.__API_PATH.UPDATE_HOTEL;
					request.method 		  = "PUT";
					request.data.hotel_id = hotelData._id;
					request.data.image    = $scope.image;
				}
				
				globalRequest.jotCRUD(request).then(function(response){

					localStorageService.set('processingHotel',response.result);							
					if(response.status == 1)
					{	
						var nextStep;
						if($scope.image)
						{
							$rootScope.hoteljotLoader = false;
							nextStep   = parseInt($routeParams.steps)+1;				
						    $location.path('/dashboard/hotel-setup/'+nextStep);
						} else{
							if ($scope.uploaedImgage && $scope.uploaedImgage.length) 
							{	
								uploadCoverIMage(response.result._id);
							} else {	
								$rootScope.hoteljotLoader = false;	
								nextStep   = parseInt($routeParams.steps)+1;
							    $location.path('/dashboard/hotel-setup/'+nextStep);
							}
						}
						
					}	else {						
							$rootScope.hoteljotLoader = false;
							var errors = '<ul class="mdToast-error-list">';
							angular.forEach(response.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';

							var popup = {"message":errors,"class":""};
							toastService.errors(popup);
					}	

				});

			} else {				

				var popup = {"message":"Please accept terms and conditions.","class":""};
				toastService.errors(popup);
			}
		};	


		/*****************************************
		* Hotel image upload
		*****************************************/	

		$scope.$watch('files', function () {
        	$scope.uploadCover($scope.files);
	    });

	    $scope.$watch('file', function () {
	        if ($scope.file != null) {
	            $scope.files = [$scope.file];
	        }
	    });

	    $scope.uploadCover = function(files, errFiles) {			
			$scope.uploaedImgage = files;
			$scope.image = '';
	    };

	    function uploadCoverIMage(hotelId){

    		globalRequest.uploadFiles(hotelId,'cover',$scope.uploaedImgage).then(function (response) {	 
            
                $timeout(function () {	                 

                 var ImageRequest={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:{hotel_id:hotelId,image:response.result[0].filename}
					};

                 globalRequest.jotCRUD(ImageRequest).then(function(updateResponse){
												
						if(updateResponse.status == 1)
						{	
							var processingHotel  = localStorageService.get('processingHotel');

							processingHotel.image = response.result[0].filename;
							localStorageService.set('processingHotel',processingHotel);
							$rootScope.hoteljotLoader = false;
							var nextStep   = parseInt($routeParams.steps)+1;
						    $location.path('/dashboard/hotel-setup/'+nextStep);
						}		

					});

                });
            });	        

	    }			
				
	}
]);
"use strict";

app.controller('step2Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,toastService) {	

		
		$scope.defaultBoards = window.__API_PATH.JOT_TYPES;
		


		/*angular.forEach*/

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};

		/************************************************
		* Step2 form submit
		*************************************************/

		$scope.step2FormSubmit = function(){
			$rootScope.hoteljotLoader = true;

			$scope.featureResult = {class:"",message:"",status:""};
			var getSelectedValues = [];
			for (var key in $scope.step2Ctlr.selectFeature) {
				if($scope.step2Ctlr.selectFeature[key]){							
			    	getSelectedValues.push($scope.step2Ctlr.selectFeature[key].id);
				}
			}
			
			if(getSelectedValues.length > 0)
			{		

				 var hotelDataObj = {
				 		hotel_id     	   : $rootScope.newProcessingHotel._id,
				 		jot_types 		   : getSelectedValues						
						
				};
				var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					$rootScope.hoteljotLoader = false;						
					if(response.status == 1)
					{						
						var nextStep   = parseInt($routeParams.steps) +1;
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$rootScope.hoteljotLoader = false;				
				var popup = {"message":"Please Select at least one jot type.","class":""};
				toastService.errors(popup);
			}
		};	



				
	}
]);

"use strict";

app.controller('step3Controller', ['$scope','$rootScope','$routeParams','$location','localStorageService','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,localStorageService,globalRequest,toastService) {	


		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};


		/************************************************************	
		* Default department list
		************************************************************/
		if($scope.selectedDepartment)
		{
			if($scope.selectedDepartment.length > 0)
			{
				$scope.defaultDepartment = $scope.selectedDepartment;
			} else {
				$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
			}

		} else {
			$scope.defaultDepartment = window.__API_PATH.DEFAULT_DEPARTMENT;
		}		
		

		/************************************************
		* Add new department into default list
		*************************************************/

		$scope.addNewDepartment = function(){

			var errors = '<ul class="mdToast-error-list">';
			var errorRestrict = false;

			/************** Check empty field  **************/

			if(!$scope.new_department_name)
			{
				
				errors += '<li>Department name is required.</li>';
				errorRestrict = true;
			}

			if(!$scope.new_abbreviation)
			{
				errors += '<li>Abbreviation is required.</li>';
				errorRestrict = true;
			}

			/************** Check deplicate value  **************/

			angular.forEach($scope.defaultDepartment,function(value,key){
				if(value.department_name == $scope.new_department_name)
				{
					
					errors += '<li>Department name already exists.</li>';
					errorRestrict = true;
				}

				if(value.abbreviation == $scope.new_abbreviation)
				{					
					errors += '<li>Abbreviation already exists.</li>';
					errorRestrict = true;
				}
			});

			/************** Create array  **************/

			if(!errorRestrict)
			{
				$scope.defaultDepartment.push({
					department_name : $scope.new_department_name,
					abbreviation : $scope.new_abbreviation,
					checked:true
				});
				$scope.new_department_name = '';
				$scope.new_abbreviation = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

		};


		/************************************************
		* Step3 form submit
		*************************************************/

		$scope.step3FormSubmit = function(){
			$rootScope.hoteljotLoader = true;

			var removeKeyFromArray = [];
			for (var key in $scope.step3Ctlr.department_select) {
				if($scope.step3Ctlr.department_select[key])
				{
					$scope.step3Ctlr.department_select[key].hotel_id =  $rootScope.newProcessingHotel._id;
					removeKeyFromArray.push($scope.step3Ctlr.department_select[key]);
				}
								
			}				

			if(removeKeyFromArray.length > 0)
			{
				$scope.message = ' ';		

				 var hotelDataObj = {
				 		hotel_id     	       : $rootScope.newProcessingHotel._id,
				 		departments_list 	   : removeKeyFromArray	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_DEPARTMENTS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){				
					$rootScope.hoteljotLoader = false;						
					if(response.status == 1)
					{
						var nextStep   = parseInt($routeParams.steps) +1;					
						$location.path('/dashboard/hotel-setup/'+nextStep);
					}				

				});

			} else {
				$rootScope.hoteljotLoader = false;				
				var popup = {"message":"Please select at least one department.","class":""};
				toastService.errors(popup);
			}
		};
			
				
	}
]);
"use strict";

app.controller('step4Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,toastService) {	

		
		function isEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }

		    return JSON.stringify(obj) === JSON.stringify({});
		}
		


		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};	

		/************************************************
		* Add new employee in list
		*************************************************/
		//$scope.addedEmployee = [];
		$scope.addNewEmp = function(){

			var errorRestrict = false;
			var errors = '<ul class="mdToast-error-list">';
			if(!$scope.newfield)
			{
				
				errors += '<li>First name is required.</li>';
				errors += '<li>Last name is required.</li>';
				errors += '<li>Contact number is required.</li>';
				errors += '<li>Please select department.</li>';
				errorRestrict = true;

			} else {

				if(!$scope.newfield.newfield_first_name)
				{
					
					errors += '<li>First name is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newfield_last_name)
				{
					errors += '<li>Last name is required.</li>';
					errorRestrict = true;
				}				

				if(!$scope.newfield.newfield_contact_number)
				{
					errors += '<li>Contact number is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newDepartment)
				{
					errors += '<li>Please select department.</li>';
					errorRestrict = true;
				}

				
				angular.forEach($scope.addedEmployee,function(value,key){
					
					if(value.email == $scope.newfield.newfield_email)
					{						
						errors += '<li>Email address already exists for this hotel.</li>';
						errorRestrict = true;
					}

					if(value.contact_number == $scope.newfield.newfield_contact_number)
					{						
						errors += '<li>Contact Number already exists for this hotel.</li>';
						errorRestrict = true;
					}

				});	
				

			}	

			if(!errorRestrict)
			{					

				$scope.addedEmployee.push({
					first_name     : $scope.newfield.newfield_first_name, 
					last_name      : $scope.newfield.newfield_last_name,
					department     : $scope.newfield.newDepartment,
					email          : $scope.newfield.newfield_email,
					contact_number : $scope.newfield.newfield_contact_number, 
				});
				
				$scope.newfield.newfield_first_name = '';
				$scope.newfield.newfield_last_name = '';
				$scope.newfield.newDepartment = '';
				$scope.newfield.newfield_email = '';
				$scope.newfield.newfield_contact_number = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

			
		};


		/************************************************
		* Step4 form submit
		*************************************************/

		$scope.step4FormSubmit = function(){
			$rootScope.hoteljotLoader = true;

			var selectedEmployee = [];
			angular.forEach($scope.stepsCtrl.selected_emp,function(value,key){
				if($scope.stepsCtrl.selected_emp[key])
				{
					value.hotel_id = $rootScope.newProcessingHotel._id;
					var departmentlist = [];
					angular.forEach(value.department,function(depValue,deptKey){
						departmentlist.push(depValue.abbreviation);
					});
					value.department   = departmentlist;
					selectedEmployee.push(value);
				}

			});
		
			
			if(selectedEmployee.length > 0)
			{					

				 var hotelDataObj = {
				 		hotel_id     	       : $rootScope.newProcessingHotel._id,
				 		member_list 	       : selectedEmployee	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_MEMBERS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					$rootScope.hoteljotLoader = false;	
					if(response.status == 1)
					{

						if($rootScope.nextStep)
						{
							var nextStep   = parseInt($routeParams.steps) +1;			
							$location.path('/dashboard/hotel-setup/'+nextStep);

						}	else {
							/************************************************
							* Mark steps completed
							*************************************************/

							var hotelrequest={
									url:window.__API_PATH.UPDATE_HOTEL,
									method:"PUT",
									data:{hotel_id : $rootScope.newProcessingHotel._id,step:'completed'}
								};

							globalRequest.jotCRUD(hotelrequest).then(function(hotelresponse){
								if(hotelresponse.status == 1)
								{	
									$location.path('/dashboard/hotel-setup');
								}	
							});
						}			
					}				

				});

			} else {
				$rootScope.hoteljotLoader = false;
				var popup = {"message":"Please enter at least one employee.","class":""};
				toastService.errors(popup);
			}
			
		};			
			
	}
]);

"use strict";

app.controller('step5Controller', ['$scope','$rootScope','$routeParams','$location','globalRequest','toastService',
	function($scope,$rootScope,$routeParams,$location,globalRequest,toastService) {	

		
		function isEmpty(obj) {
		    for(var prop in obj) {
		        if(obj.hasOwnProperty(prop))
		            return false;
		    }

		    return JSON.stringify(obj) === JSON.stringify({});
		}
		

		/************************************************
		* Navigate on previous page
		*************************************************/

		$scope.navigateBack = function(){
			var page = $routeParams.steps - 1;			
			$location.path('/dashboard/hotel-setup/'+page);
		};	

		/************************************************
		* Add new employee in list
		*************************************************/
		$scope.addedRooms = [];
		$scope.addNewRoom = function(){

			var errorRestrict = false;
			var errors = '<ul class="mdToast-error-list">';
			if(!$scope.newfield)
			{
				
				errors += '<li>Room name is required.</li>';
				errors += '<li>Room number is required.</li>';
				errorRestrict = true;

			} else {

				if(!$scope.newfield.newfield_room_name)
				{
					
					errors += '<li>Room name is required.</li>';
					errorRestrict = true;
				}

				if(!$scope.newfield.newfield_room_number)
				{
					errors += '<li>Room number is required.</li>';
					errorRestrict = true;
				}				

				
				angular.forEach($scope.addedRooms,function(value,key){
					
					if(value.room_number == $scope.newfield.newfield_room_number)
					{						
						errors += '<li>Room number already exists for this hotel.</li>';
						errorRestrict = true;
					}

				});	
				

			}	

			if(!errorRestrict)
			{					

				$scope.addedRooms.push({
					name          : $scope.newfield.newfield_room_name, 
					room_number   : $scope.newfield.newfield_room_number,
					capacity      : $scope.newfield.newfield_capacity,
					cost          : $scope.newfield.newfield_cost
				});
				
				$scope.newfield.newfield_room_name = '';
				$scope.newfield.newfield_room_number = '';
				$scope.newfield.newfield_capacity = '';
				$scope.newfield.newfield_cost = '';
			} else {
				var popup = {"message":errors,"class":""};
				toastService.errors(popup);
			}

			
		};


		/************************************************
		* Step5 form submit
		*************************************************/

		$scope.step5FormSubmit = function(){
			var selectedRooms = [];

			angular.forEach($scope.stepsCtrl.selected_room,function(value,key){
				if($scope.stepsCtrl.selected_room[key])
				{
					value.hotel_id = $rootScope.newProcessingHotel._id;					
					selectedRooms.push(value);
				}

			});
				
			
			if(selectedRooms.length > 0)
			{					

				 var hotelDataObj = {
				 		hotel_id     	   : $rootScope.newProcessingHotel._id,
				 		room_list 	       : selectedRooms	
				};

				var request={
						url:window.__API_PATH.CONFIGURE_ROOMS,
						method:"POST",
						data:hotelDataObj
					};

				globalRequest.jotCRUD(request).then(function(response){	
					
					if(response.status == 1)
					{	


						if($rootScope.nextStep)
						{
							var nextStep   = parseInt($routeParams.steps) +1;			
							$location.path('/dashboard/hotel-setup/'+nextStep);

						}	else {
							
							/************************************************
							* Mark steps completed
							*************************************************/

							var hotelrequest={
									url:window.__API_PATH.UPDATE_HOTEL,
									method:"PUT",
									data:{hotel_id : $rootScope.newProcessingHotel._id,step:'completed'}
								};

							globalRequest.jotCRUD(hotelrequest).then(function(hotelresponse){
								if(hotelresponse.status == 1)
								{	
									$location.path('/dashboard/hotel-setup');
								}	
							});
						}												
					}				

				});

			} else {
				
				var popup = {"message":"Please enter at least one employee.","class":""};
				toastService.errors(popup);
			}
			
		};			
			
	}
]);

"use Strict";

app.controller('demoController',['$scope',
	function($scope){

}]);
"use strict";

app.controller('departmentController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		


		/************************************
		* Blank all field before open form
		*************************************/	

		$scope.blank = function(){
			$scope.department_name = "";		
			$scope.department_abbreviation = "";		
			$scope.department_desc = "";
		};	

		
		/************************************
		* Get department list
		*************************************/	
				
		globalRequest.getDepartments();

		/************************************
		* Add Department
		*************************************/		
		

		$scope.addDepartment = function(){	

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.department_abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.ADD_DEPARTMENT,
			            method:"POST",
			            data:{
			            	hotel_id      	   :  $rootScope.activeHotelData._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,			            	
			            	description        :  $scope.department_desc
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
				
			 	if(response.status == 1)
			 	{
			 		$scope.blank();
			 		if(!$scope.departmentList)
			 		{
			 			$scope.departmentList = [];
			 		}
			 		$scope.departmentList.push(response.result);
			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);		 		
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditDepartment = function(detail){
				$mdDialog.show({
					controller: 'editDepartmentController',
					templateUrl: '/modules/department/views/edit_department.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{deptDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete department
		*****************************************/	

		$scope.removeDepartment = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_DEPARTMENT,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.departmentList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
		
	}
]);






"use strict";

app.controller('editDepartmentController', ['$scope','globalRequest','deptDetail','$mdDialog','toastService',
	function($scope,globalRequest,deptDetail,$mdDialog,toastService) {
		

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(deptDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateDepartment = function(){
			

			var departmentName	=	$scope.department_name;
			var Abbreviation	=	$scope.abbreviation;
			if(!Abbreviation){
				if(departmentName){
					var departmentNameArray = departmentName.match(/\b(\w)/g);
				    Abbreviation        = departmentNameArray.join('');
				} 				
			}

			var request = {
			            url:window.__API_PATH.UPDATE_DEPARTMENT,
			            method:"PUT",
			            data:{
			            	_id      	       :  $scope._id,
			            	department_name    :  departmentName,
			            	abbreviation       :  Abbreviation,			            	
			            	description        :  $scope.description
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getDepartments();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);

			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 	
			});

		};		
		
	}
]);




"use strict";

app.filter('departmentfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchDepartmentName  = scope.searchDepartment;
			if(!searchDepartmentName)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							

							if(searchDepartmentName)
							{
								if (obj.department_name.match(new RegExp("(" + searchDepartmentName + ")", "i"))) 
								{
							       return true;
							    }
							}

						});
		}
		return input;

	};

});
"use strict";

app.controller('EditDocumentController', ['$scope','$rootScope','globalRequest','Detail','$mdDialog','$timeout','toastService',
	function($scope,$rootScope,globalRequest,Detail,$mdDialog,$timeout,toastService) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;

			} else if(key == 'department'){

				$rootScope.department = value;

			} else if(key == 'files'){

				$scope.filesData = value;

			} else {
				$scope[key] = value;
			}
		});	


		/************************************
		* Edit document
		*************************************/		

		$scope.editDC = function(){	

			/*********************************************
			* Check files exists in scope to upload
			* if yes, upload doument
			* if no, save the information without files
			*********************************************/

			var popup;
			if ($scope.newFiles && $scope.newFiles.length) {

				globalRequest.uploadFiles($rootScope.activeHotelData._id,'document_center',$scope.newFiles).then(function (response) {				
	                $timeout(function () {
		                if(response.status == 1)
		                {
		                   /*********************************************
							* Save document information
							*********************************************/
							$scope.newFiles= '';
							Array.prototype.push.apply($scope.filesData,response.result);

							var request = {
						            url:window.__API_PATH.UPDATE_DOCUMENT,
						            method:"PUT",
						            data:{
						            	_id      	   			:  $scope._id,
						            	document_name   		:  $scope.document_name,
						            	department      		:  $rootScope.department,
						            	tags        			:  $scope.ctrl.itemTagModel,
						            	document_description    :  $scope.document_description,
						            	files       		    :  $scope.filesData,
						            	upload_date				:  new Date().getTime()
						            }
						          };

							globalRequest.jotCRUD(request).then(function(dcresponse){	 
							 	if(dcresponse.status ==1)
							 	{
							 		$mdDialog.cancel();
							 		globalRequest.getDocument();

							 		popup = {"message":dcresponse.message,"class":dcresponse.class};
									toastService.alert(popup);

							 	}  else {
							 		var errors = '<ul class="mdToast-error-list">';
									angular.forEach(dcresponse.errors,function(value,key){
										errors += '<li>'+value.message+'</li>';
									});
									errors += '</ul>';
									popup = {"message":errors,"class":""};
									toastService.errors(popup);
							 	}

							 });	
						}   else {
					 		var errors = '<ul class="mdToast-error-list">';
							angular.forEach(response.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';
							popup = {"message":errors,"class":""};
							toastService.errors(popup);
					 	}				

	                });
	            });


			} else {

				/*************************************************
				* Save document information if no files in scope
				*************************************************/

				var request = {
			            url:window.__API_PATH.UPDATE_DOCUMENT,
			            method:"PUT",
			            data:{
			            	_id      	   			:  $scope._id,
			            	document_name   		:  $scope.document_name,
			            	department      		:  $rootScope.department,
			            	tags        			:  $scope.ctrl.itemTagModel,
			            	document_description    :  $scope.document_description,			            	
			            	upload_date				:  new Date().getTime()
			            }
			          };

				globalRequest.jotCRUD(request).then(function(response){
				 	
				 	if(response.status ==1)
				 	{
				 		$mdDialog.cancel();
				 		globalRequest.getDocument();
				 		popup = {"message":response.message,"class":response.class};
						toastService.alert(popup);

				 	}   else {
				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(response.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}

				 });
				
			}		
			

		};

		/************************************
		* Remove files by index
		*************************************/	

		$scope.removeImageIndex = function(fData){
			$scope.filesData = $scope.filesData.filter(function( obj ) {
					    return obj.filename != fData.filename;
					});

		};	
  

		/*****************************************
		* Append selected files in scope variable 
		*****************************************/


		$scope.$watch('files', function () {		
	        $scope.uploadDocument($scope.files);
	    });

	    $scope.$watch('file', function () {
	        if ($scope.file != null) {
	            $scope.files = [$scope.file];
	        }
	    });


		$scope.uploadDocument = function(files, errFiles) {	
			$scope.newFiles = files;
	    };


	    /*****************************************
		* delete  file from scope variable 
		*****************************************/

	    $scope.deleteAttachment = function(hashKey){
			$scope.newFiles = $scope.newFiles.filter(function(key){
				return key.$$hashKey != hashKey;
			});
		};

	}
]);
"use strict";

app.controller('documentCenterController',['$scope','$rootScope','globalRequest','$mdDialog','toastService','$timeout',function($scope,$rootScope,globalRequest,$mdDialog,toastService,$timeout){
	

	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.document_name 		= "";		
		$scope.document_description = "";
		$scope.fileData 			= "";		
		$rootScope.department 		= "";
		$scope.documentProgress 	= -1;
		$scope.documentResult 		= "";	
	};

	$scope.blankFields = function(){
		$scope.blank();
		$scope.ctrl.itemTagModel 	= [];
	};


	/**********************************************************
    * Item tags 
    **********************************************************/

	var self = this;
    self.readonly = false;	    
    self.itemTag = [];
    self.itemTagModel = angular.copy(self.itemTag);
    self.editableitemTag = angular.copy(self.itemTag);
    self.tags = [];	    
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };

    /************************************
	* Get documents
	*************************************/

    globalRequest.getDocument();

    /************************************
	* Get department list
	*************************************/			
	
	globalRequest.getDepartments();

	/************************************
	* Add documents
	*************************************/	
	
	$scope.addDC = function(){

		/*********************************************
		* Check files exists in scope to upload
		* if yes, upload doument
		* if no, save the information without files
		*********************************************/

		var popup;
		if ($scope.fileData && $scope.fileData.length) {


			globalRequest.uploadFiles($rootScope.activeHotelData._id,'document_center',$scope.fileData).then(function (response) {			
                $timeout(function () {
	                if(response.status == 1)
	                {
	                   /*********************************************
						* Save document information
						*********************************************/

	                   var request = {
						            url:window.__API_PATH.ADD_DOCUMENT,
						            method:"POST",
						            data:{
						            	hotel_id      			:  $rootScope.activeHotelData._id,
						            	document_name   		:  $scope.document_name,
						            	department      		:  $rootScope.department,
						            	tags        			:  $scope.ctrl.itemTagModel,
						            	document_description    :  $scope.document_description,
						            	files       		    :  response.result,
						            	upload_date				:  new Date().getTime()
						            }
						    };

						globalRequest.jotCRUD(request).then(function(dcresponse){
						 	var popup;
						 	if(dcresponse.status == 1)
						 	{
						 		$scope.blankFields();				
						 		if(!$scope.documentList)
						 		{
						 			$scope.documentList = [];
						 		}
						 		$scope.documentList.push(dcresponse.result);
						 		popup = {"message":dcresponse.message,"class":dcresponse.class};
								toastService.alert(popup);
						 		
						 	}  else {
						 		var errors = '<ul class="mdToast-error-list">';
								angular.forEach(dcresponse.errors,function(value,key){
									errors += '<li>'+value.message+'</li>';
								});
								errors += '</ul>';
								popup = {"message":errors,"class":""};
								toastService.errors(popup);
						 	}
						 });
					}  else {
				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(response.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}
                });
            });            


		} else {

			/*************************************************
			* Save document information if no files in scope
			*************************************************/

			var request = {
			            url:window.__API_PATH.ADD_DOCUMENT,
			            method:"POST",
			            data:{
			            	hotel_id      			:  $rootScope.activeHotelData._id,
			            	document_name   		:  $scope.document_name,
			            	department      		:  $rootScope.department,
			            	tags        			:  $scope.ctrl.itemTagModel,
			            	document_description    :  $scope.document_description,			            	
			            	upload_date				:  new Date().getTime()
			            }
			    };

			globalRequest.jotCRUD(request).then(function(response){
			 	
			 	if(response.status == 1)
			 	{
			 		$scope.blankFields();				
			 		if(!$scope.documentList)
			 		{
			 			$scope.documentList = [];
			 		}
			 		$scope.documentList.push(response.result);

			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 		
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		}
		

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentFileView = function(detail){
			$mdDialog.show({
				controller: 'documentViewController',
				templateUrl: '/modules/document_center/views/view_files.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openDocumentEditPopup = function(detail){
			$mdDialog.show({
				controller: 'EditDocumentController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/document_center/views/edit_document.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{Detail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};

	

	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeDc = function(detail,index){

		var request={
			url:window.__API_PATH.DELETE_DOCUMENT,
			method:"DELETE",
			params:{_id:detail}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	

			if(response.status == 1)
			{
				$scope.documentList.splice(index, 1);
			}			
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
		});

	};

	$scope.$watch('files', function () {
        $scope.uploadDocument($scope.files);
    });

    $scope.$watch('file', function () {
        if ($scope.file != null) {
            $scope.files = [$scope.file];
        }
    });
  

	/*****************************************
	* Append selected files in scope variable 
	*****************************************/	

	$scope.uploadDocument = function(files, errFiles) {	
		$scope.fileData = 	files;
    };

    /*****************************************
	* delete  file from scope variable 
	*****************************************/

    $scope.deleteAttachment = function(hashKey){
		$scope.fileData = $scope.fileData.filter(function(key){
			return key.$$hashKey != hashKey;
		});
	};
	
	
}]);
"use strict";

app.controller('documentViewController', ['$scope','Detail',
	function($scope,Detail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(Detail.detail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);




"use strict";

app.filter('dcDepartmentFilter',function(){
	return function(input,scope){
		if(input)
		{

			var searchDepartment        = scope.searchDepartment;
			if(!searchDepartment){
				return input;
			}

	
			input   =   input.filter(function( obj ) {
							if(obj.department.indexOf(searchDepartment) != -1)
							{
								return true;
							}
						});
		}
		return input;
	};

});
"use strict";

app.controller('editEmployeeController', ['$scope','$rootScope','globalRequest','$timeout','empDetail','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$timeout,empDetail,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;

		
		/***********************************************
		* Take employee detail in current scope
		***********************************************/
		

		$scope.departmentList = empDetail.prevScope.departmentList;

		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.profile_image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image;
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}

		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editEmployee = function(){
	
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.UPDATE_MEMBER,
			            method:"PUT",
			            data:{
			            	_id  		  :  $scope._id,
			            	first_name    :  $scope.first_name || null,
			            	last_name     :  $scope.last_name || null,
			            	contact_number:  $scope.contact_number || null,
			            	email         :  $scope.email || null,
			            	status 		  :  status,
			            	departments   :  $scope.departments,
			            	profile_image :  $scope.profileimages,
			            	position 	  :  $scope.position,
			            	address 	  :  $scope.address
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getStaff();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}

			 });

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	

			globalRequest.uploadFiles($rootScope.activeHotelData._id,'profile',files).then(function (response) {
	                $timeout(function () {	                  
	                   $scope.profileimages = response.result[0].filename;
	                });
	            });	      

	    };
		
	}
]);




"use strict";

app.controller('editPositionController', ['$scope','globalRequest','positionDetail','$mdDialog','toastService',
	function($scope,globalRequest,positionDetail,$mdDialog,toastService) {
				
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(positionDetail,function (value,key) {
		    $scope[key] = value;
		});
		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editPosCat = function(){	
						
			var request = {
			            url    : window.__API_PATH.UPDATE_POSITION,
			            method : "PUT",
			            data:{
			            	_id        :  $scope._id,
			            	position   :  $scope.position
			            }
			          };

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getPositionList();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}

			 });
		};
		
	}
]);




"use strict";

app.controller('editshiftController', ['$scope','globalRequest','shiftDetail','$mdDialog','toastService',
	function($scope,globalRequest,shiftDetail,$mdDialog,toastService) {
		

		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Get color codes
		*/

		$scope.colorCodes = window.__API_PATH.COLOR_CODE;

		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				

		angular.forEach(shiftDetail.detail,function (value,key) {

			if(key == 'bgcolor'){	
				$scope.ctlr.bgcolor = value;
			} else {
				$scope[key] = value;
			}
		    
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.updateShift = function(){
	
			var request = {
			            url:window.__API_PATH.UPDATE_HOTELSHIFTS,
			            method:"PUT",
			            data:{
			            	_id      	    :  $scope._id,
			            	shift_name      :  $scope.shift_name,		
		            		department_name :  $scope.department_name,
		            		bgcolor       	:  $scope.ctlr.bgcolor,
		            		start_time      :  $scope.start_time,		
		            		end_time        :  $scope.end_time,
	
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getShiftTime();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 	
			});

		};		
		
	}
]);




"use strict";

app.controller('employeeController', ['$scope','$rootScope','globalRequest','$timeout','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$timeout,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.first_name = "";
			$scope.last_name = "";
			$scope.contact_number = "";
			$scope.email = "";
			$scope.departments = "";
			$scope.position = "";
			$scope.status = "";
			$scope.address = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
			$scope.profileimages = '';
		};



		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		
		/************************************
		* Get employee list
		*************************************/		
		globalRequest.getStaff();

		/************************************
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();

		/************************************
		* Add employee
		*************************************/		
		

		$scope.addEmployee = function(){

			
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEMBER,
			            method:"POST",
			            data:{
			            	hotel_id         :  $rootScope.activeHotelData._id,
			            	first_name       :  $scope.first_name,
			            	last_name        :  $scope.last_name,
			            	contact_number   :  $scope.contact_number,
			            	email            :  $scope.email,
			            	status 		     :  status,
			            	departments      :  $scope.departments,
			            	profile_image    :  $scope.profileimages,
			            	position 	     :  $scope.position,
			            	address 	     :  $scope.address
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
		 		var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.blank();
			 		if(!$rootScope.staffList)
			 		{
			 			$rootScope.staffList = [];
			 		}
			 		$rootScope.staffList.push(response.result);

			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			$mdDialog.show({
				controller: 'editEmployeeController',
				templateUrl: '/modules/employee/views/edit_employee.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeEmployee = function(empID,index){

			var request={
				url:window.__API_PATH.DELETE_MEMBER,
				method:"DELETE",
				params:{_id:empID}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				
				$rootScope.staffList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
			globalRequest.uploadFiles($rootScope.activeHotelData._id,'profile',files).then(function (response) {	        
	                $timeout(function () {	                   
	                   $scope.profileimages = response.result[0].filename;
	                });
	            });
	    };

	    /*****************************************
		* Invite employee to login
		*****************************************/

	    $scope.sendInvitation = function(empData){
	    	//var edata = 'http://localhost:3000/api/invitation/'+empData.signupVerificationKey;
	    	var edata = '';
	    	edata 	 += 'employee_id='+empData._id;
	    	edata 	 += '&hotel_id='+$rootScope.activeHotelData._id;
	    	edata 	 += '&first_name='+empData.first_name;
	    	edata    += '&last_name='+empData.last_name;
	    	edata    += '&email='+empData.email;
	    	edata    += '&profile_image='+empData.profile_image;
	    	edata    += '&formtype=invitation';
	    	edata    += '&contact_number='+empData.contact_number;
	    	edata    += '&token='+empData.signupVerificationKey;
	    	edata     = window.btoa(edata);
	    	var url   = 'http://localhost:3000/invitation/'+edata;

	    	console.log(url);
	    };

	    /*$scope.viewDetail = function(){

	    };*/
		
	}
]);




"use strict";

app.controller('positionController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {


		/************************************
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();

		
		/************************************
		* Add position
		*************************************/		
		

		$scope.addPosition = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_POSITION,
			            method:"POST",
			            data:{
			            	hotel_id   :  $rootScope.activeHotelData._id,
			            	position   :  $scope.position
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.position = "";
			 		globalRequest.getPositionList();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};

		/*****************************************
		* Open edit position
		*****************************************/	

		$scope.openEditForm = function(detail){
			
				$mdDialog.show({
					controller: 'editPositionController',
					templateUrl: '/modules/employee/views/edit_position.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{positionDetail:detail}				
				}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete position
		*****************************************/	

		$scope.removePos = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_POSITION,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.potisionList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		
		
	}
]);




"use strict";

app.controller('scheduleEmpController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService','scheduledData',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService,scheduledData) {
		
		var date         	= new Date(scheduledData.scheduleDate);
		

		/*****************************************************
		* Initialize time array if time not scheduled
		*****************************************************/

		$scope.shiftTime              = {start_time:{},end_time:{}};
		$scope.shiftTime.start_time   = {hour:"",minute:""};
		$scope.shiftTime.end_time     = {hour:"",minute:""};

		/*
		* Get day list in array
		*/

		$scope.getDay = function(num) {
		    return new Array(num);   
		};


		
		/*****************************************************
		* Populate start and end time on edit time schedule
		*****************************************************/

		if(scheduledData.empDetail.Scheduledata.length > 0)
		{
		
			var matchColumnDate =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();
			angular.forEach(scheduledData.empDetail.Scheduledata,function(value,key){

				if(	value.shift_filter_date == matchColumnDate  &&  value.department == scheduledData.ScheduleDepartment.abbreviation )
				{
					$scope.selectVal                    = value.schedule_data._id;				
					$scope.note                         = value.schedule_data.note;
					$scope.shiftTime.start_time.hour    = value.schedule_data.start_time.hour;
					$scope.shiftTime.start_time.minute  = value.schedule_data.start_time.minute;
					$scope.shiftTime.end_time.hour      = value.schedule_data.end_time.hour;
					$scope.shiftTime.end_time.minute    = value.schedule_data.end_time.minute;
								
				}
			});
		}
		

		/*
		* Populate start and end time on change of shift
		*/

		$scope.onChangeSchedule = function(){

			if($scope.shiftTimeList && $scope.shiftTimeList != "custom" && $scope.shiftTimeList != "onleave")
			{
				var getShift         = JSON.parse($scope.shiftTimeList);
				$scope.shiftTime     = getShift;
				$scope.dateValue     = 'shift';	
			} else {
				$scope.dateValue = $scope.shiftTimeList;
			}	

			if($scope.shiftTimeList == "onleave")
			{						
				$scope.shiftTime.start_time   = {hour:"",minute:""};
			    $scope.shiftTime.end_time   = {hour:"",minute:""};
			}
			
		};



		/************************************
		* Add employee schedule data
		*************************************/


		$scope.setSchedule = function(){
			var shiftID;			
			var monthVal 	 = date.getMonth();
			var firstDay     = new Date(date.getFullYear(), monthVal, 1);
			var lastDay      = new Date(date.getFullYear(), monthVal + 1, 0);

			var empData 	 = scheduledData.empDetail;
			var scheduleData = {};				

			if($scope.shiftTime)
			{

				if($scope.dateValue == "custom" || $scope.dateValue == "onleave")
				{			
					shiftID      = $scope.dateValue;				

				} else {
					shiftID      = $scope.shiftTime._id;
				}				
				scheduleData  = {
									_id        : shiftID,
									start_time : $scope.shiftTime.start_time,
									end_time   : $scope.shiftTime.end_time,
									note   	   : $scope.note,
							    };
			} else {
				scheduleData = '';
			}


			if(scheduledData.multipleSchedule.length > 0)
			{

			}

			var filterString =  date.getDate()+''+(parseInt(date.getMonth())+1) +''+date.getFullYear();		
			var SchedRequest = {
		            url:window.__API_PATH.ADD_MEMBER_SCHEDULE,
		            method:"POST",
		            data:{
		            	hotel_id       		:  $rootScope.activeHotelData._id,		
		            	user_id        		:  empData._id,
		            	department          :  scheduledData.ScheduleDepartment.abbreviation,
		            	shift_date     		:  new Date(date.getFullYear(),date.getMonth(), date.getDate()).getTime(),
		            	shift_filter_date   :  filterString,	            		
		            	schedule_data  		:  scheduleData		           	
		            }
		        };


		    if(scheduledData.multipleSchedule.length > 0)
			{

				
				scheduledData.multipleSchedule = scheduledData.multipleSchedule.filter(function(dataValue){
					Object.assign(dataValue,{schedule_data :  scheduleData});
					return dataValue;
				});

				SchedRequest.url = window.__API_PATH.ADD_MULTIPLE_SCHEDULE;
				SchedRequest.data = {
					multiple_schedule : scheduledData.multipleSchedule,
					
				};
				
			}

			
			var popup;
			
			    globalRequest.jotCRUD(SchedRequest).then(function(response){	
				 	if(response.status == 1)
				 	{
				 		$rootScope.$emit("CallgetSchedule", {firstDay:firstDay,lastDay:lastDay});
				 		$rootScope.$emit('scheduleField');
				 		$mdDialog.cancel();	
				 		popup = {"message":response.message,"class":response.class};
						toastService.alert(popup); 
				 	} else {
				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(response.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}
				});
			

		};
		
		
	}
]);
"use strict";

app.controller('schedulerController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','$interval','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,$interval,toastService) {

		
		var date 	   	     = new Date();
		$scope.currentDate   = new Date(); 
		$scope.datesData 	 = {dates : "", monthStartDate : ""};
		$scope.position_list = window.__API_PATH.POSITION;
		$scope.dateLabel  = {from:"",to:""};



		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		

		/*******************************************************
		* Callback function to close color swatch on outside click
		*******************************************************/

		$scope.swatchToggle = function(){			
				$scope.colorSwatch = false;
											
		};

		/*
		* Get color codes
		*/

		$scope.colorCodes = window.__API_PATH.COLOR_CODE;


		/************************************
		* Get shift timing
		*************************************/		
		globalRequest.getShiftTime();

		/************************************
		* Get position list
		*************************************/			
		
		globalRequest.getPositionList();
		

		/************************************
		* Get employee schedule data
		*************************************/	

		$scope.getSchedule = function(fromDate,toDate){

			var from = new Date(new Date(fromDate).getFullYear(),new Date(fromDate).getMonth(),new Date(fromDate).getDate()).getTime();
			var to = new Date(new Date(toDate).getFullYear(),new Date(toDate).getMonth(),new Date(toDate).getDate()).getTime();

			$scope.hideLoader = false;
			var GetRequest =  {
					url:window.__API_PATH.MEMBER_SCHEDULE_DATA,
					method:"GET",
					params:{
						hotel_id    :  $rootScope.activeHotelData._id,
						from_date   :  from,
						to_date     :  to	
					}
				};

			globalRequest.jotCRUD(GetRequest).then(function(response){				
			 	$scope.membersList = response.result;
			 	$scope.hideLoader = true;
			 });
		};


		/**************************************************
		* Make function broadcast to load from anywhere
		***************************************************/

		$rootScope.$on("CallgetSchedule", function(evt,data){
           $scope.getSchedule(data.firstDay,data.lastDay);
        });		


		/**************************************************
		* Get first and last date from current week 
		* By passing how many week date want
		**************************************************/


		Date.prototype.getDateAccordingToCurrentWeek = function(start,weekCount)
		{
		    start = start || 0;
		    var today = new Date(this.setHours(0, 0, 0, 0));
		    var day = today.getDay() - start;
		    var date = today.getDate() - day;
		    var StartDate = new Date(today.setDate(date+1));
   			var EndDate = new Date(today.setDate(date + 7 * weekCount));
		    return [StartDate, EndDate];
		};


		/**************************************************************************
		*
		* Function 
		*
		* To return array of all date by passing startDate and endDate of month
		*
		***************************************************************************/

		var AllDates  = function(startDate, endDate) {

							var dates = [],
							  currentDate = startDate,
							  addDays = function(days) {
							    var date = new Date(this.valueOf());
							    date.setDate(date.getDate() + days);
							    return date;
							  };
							  var i=0;						  

							while (currentDate <= endDate) {
							dates.push(currentDate);
							currentDate = addDays.call(currentDate, 1);
							i++;
							}

							return dates;
						};

		/*********************************************************************
		*
		* Set all data view and employee data on load if dataVAl found empty
		* Call on next and prev button click
		*
		*********************************************************************/

		$scope.UpdateCalenderViewDates 	=	function(calenderCurrentData,nav){
			$scope.activeRangeMenu     = 'fullmonth';
			$scope.scheduleRange       = false;
			
			var monthVal,firstDay,lastDay,year;

			if(calenderCurrentData)
			{	
				date 	= new Date(calenderCurrentData);							
			}	

			if(nav == 'next')
			{
				monthVal = date.getMonth()+1;
			} else if(nav == 'prev') {
				monthVal = date.getMonth()-1;
			} else {
				monthVal = date.getMonth();
			}
			
			firstDay   = new Date(date.getFullYear(), monthVal, 1);
			lastDay    = new Date(date.getFullYear(), monthVal + 1, 0);


			$scope.datesData.dates        		= AllDates(firstDay,lastDay);
			$scope.datesData.monthStartDate     = firstDay;

			/*
			* Blank calender before load new data 
			* Reinitialize calender data
			*/

			$scope.membersList 	= '';			
			$scope.getSchedule(firstDay,lastDay);
		};

		


		/**************************************************
		* Set Scheduler on page load
		**************************************************/

		function setSchedulerOnLoad()
		{
			$scope.activeRangeMenu = 1;
			var dateArray    				    = new Date().getDateAccordingToCurrentWeek('',1);
			$scope.datesData.dates        		= AllDates(dateArray[0],dateArray[1]);
			$scope.datesData.monthStartDate     = new Date(date.getFullYear(), date.getMonth(), 1);

			if(dateArray[0].getMonth() != dateArray[1].getMonth())
			{
				$scope.dateLabel 		 = {from:dateArray[0], to:dateArray[1]};
				$scope.scheduleRange     = true;
			} 


			$scope.getSchedule(dateArray[0],dateArray[1]);
		}
		setSchedulerOnLoad();

		/**************************************************
		* Set end date of calender and filter accordingly
		**************************************************/

		$scope.setVeiwRange = function(countDate){

			var firstViewDay,lastViewDay,firstDay,lastDay;
			date = new Date();

			$scope.activeRangeMenu    =  countDate;

			if(countDate == 'today')
			{
				firstViewDay = lastViewDay   = new Date(date.getFullYear(),date.getMonth(), date.getDate());
				firstDay = lastDay   = new Date(date.getFullYear(),date.getMonth(), date.getDate());

			} else if(countDate == 'fullmonth') {
				firstViewDay = firstDay   = new Date(date.getFullYear(), date.getMonth(), 1);
				lastViewDay = lastDay    = new Date(date.getFullYear(), date.getMonth() + 1, 0);
			} else {
				var dateArray   = date.getDateAccordingToCurrentWeek('',countDate);
				firstViewDay = firstDay    	= dateArray[0];
				lastViewDay = lastDay 		= dateArray[1];
			}			
			
			$scope.scheduleRange     = false;
			if(firstViewDay.getMonth() != lastViewDay.getMonth())
			{
				$scope.dateLabel 		 = {from:firstViewDay, to:lastViewDay};
				$scope.scheduleRange     = true;
			} 

			$scope.datesData.dates    = AllDates(firstViewDay,lastViewDay);
			$scope.getSchedule(firstDay,lastDay);


		};


		/**************************************************
		* Set calender view by date range
		**************************************************/

		$scope.setVeiwRangeByDate = function(selectElement){

			if(selectElement == '')
			{
				$scope.scheduleRange     = false;
				setSchedulerOnLoad();

			} else {

				$scope.activeRangeMenu = '';
				var scheduleFrom       = $scope.scheduleFrom;
				var scheduleTo  	   = $scope.scheduleTo;

				$scope.startRange = {min:"", max:""};
				$scope.endRange = {min:"", max:""};

				if(selectElement == 'start')
				{
					var rangeDate = new Date(scheduleFrom);
					$scope.scheduleTo = '';
					$scope.endRange.min = new Date(rangeDate.setDate(rangeDate.getDate()+1));
					$scope.endRange.max = new Date(rangeDate.setDate(rangeDate.getDate()+30));					
				}			

				if(scheduleFrom && scheduleTo)
				{
					$scope.dateLabel 		 = {from:scheduleFrom, to:scheduleTo};
					$scope.scheduleRange     = true;
					$scope.datesData.dates   = AllDates(scheduleFrom,scheduleTo);
					$scope.getSchedule(scheduleFrom,scheduleTo);
				}

			}

			
			
		};

		/************************************
		* Show user information in popup
		*************************************/

		$scope.showUserInfo = function(memberDetail){
			$mdDialog.show({
					controller: 'showDetailController',
					templateUrl: '/modules/employee/views/display_userinfo.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{empDetail:{detail:memberDetail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});
		};

		/************************************
		* Blank all field before open form
		*************************************/
		


		function blankOnSucess(){
			$scope.shift_name = "";		
			$scope.shift_time = "";		
			$scope.ctlr.bgcolor = "";		
			$scope.department_name = "";			
		}

		$scope.blank = function(){
			blankOnSucess();		
			$scope.shiftListResult = "";		
		};
		

		/************************************
		* Add shift timing
		*************************************/

		$scope.addshift = function(){
		 	var shiftTimeRequest = {
		            url:window.__API_PATH.ADD_HOTELSHIFT,
		            method:"POST",
		            data:{
		            	hotel_id        :  $rootScope.activeHotelData._id,		
		            	shift_name      :  $scope.shift_name,
		            	department_name :  $scope.department_name,
		            	bgcolor       	:  $scope.ctlr.bgcolor,
		            	start_time      :  $scope.start_time,		
		            	end_time        :  $scope.end_time,			
		            }
		          };
			globalRequest.jotCRUD(shiftTimeRequest).then(function(response){		
				var popup;
			 	if(response.status == 1)
			 	{
			 		blankOnSucess();
			 		if(!$scope.shiftList)
			 		{
			 			$scope.shiftList = [];
			 		}
			 		$scope.shiftList.push(response.result);		
					globalRequest.getShiftTime();
					popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {
			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		 };	



		/*********************************************************************
		* Keep selected field value in scope
		*********************************************************************/

		var selectedField  = [];
		
		
		$scope.storeFieldValue = function(d,member,dept,fieldValue){
			
			if(fieldValue)
			{
				var filterString = d.getDate()+''+(parseInt(d.getMonth())+1) +''+d.getFullYear();	
				selectedField.push({
					department 			:  dept.abbreviation,
					shift_date     		:  new Date(d.getFullYear(),d.getMonth(), d.getDate()).getTime(),
			        shift_filter_date   :  filterString,
			        user_id        		:  member._id,
			        hotel_id       		:  $rootScope.activeHotelData._id
				});
			} else {
				selectedField = selectedField.filter(function(values){
						return values.shift_date != new Date(d.getFullYear(),d.getMonth(), d.getDate()).getTime();
				});

			}
		};

		/*********************************************************************
		* Unselect all select field after scheduled
		*********************************************************************/

		$rootScope.$on('scheduleField', function (event, args) {
			selectedField  = [];
			angular.element(document.querySelectorAll(".md-checked")).removeClass("md-checked");
		
		});

		



		 /*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEditshift = function(detail){
				
				$mdDialog.show({
					controller: 'editshiftController',
					controllerAs: 'ctlr',
					templateUrl: '/modules/employee/views/edit_employee_shift.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{shiftDetail:{detail:detail}}				
				}).then(function(answer) {}, function() {});

		}; 

		/*var isAllCheck = false;	
		function togglecheckboxes(cn){			
		    var cbarray = document.getElementsByName(cn);
		    for(var i = 0; i < cbarray.length; i++){
			        cbarray[i].setAttribute("aria-checked", false);
			}   
		}
*/

		/*****************************************
		 * Open shifts edit form
		 *****************************************/	

		$scope.openEmpSchedule = function(scheduleDate,empDetail,dept){
			//togglecheckboxes('multipleSchedule');

				$mdDialog.show({
					controller: 'scheduleEmpController',
					templateUrl: '/modules/employee/views/schedule_employee.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{scheduledData:{scheduleDate:scheduleDate,empDetail:empDetail,ScheduleDepartment:dept,multipleSchedule:selectedField}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete shift
		*****************************************/	

		$scope.removeshift = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_HOTELSHIFTS,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				
				$scope.shiftList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();
		

		/*****************************************
		* Loader icon
		*****************************************/

		var self = this;
	      self.activated = true;
	      self.determinateValue = 30;
	      $interval(function() {
	        self.determinateValue += 1;
	        if (self.determinateValue > 100) {
	          self.determinateValue = 30;
	        }

	      }, 10);
		
	}
]);
"use strict";

app.controller('showDetailController', ['$scope','empDetail',
	function($scope,empDetail) {
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(empDetail.detail,function (value,key) {
		    $scope[key] = value;
		});	

		if($scope.profile_image.length > 0)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/profile/'+$scope.profile_image;
		} else {
			$scope.image = '/assets/images/default_profile.png';
		}

	}
]);




"use strict";

app.directive('outsideClickColorSwatch', function ($window) {    
    return {                 
        scope: {
            outsideCallback: '&outsideClickColorSwatch',
        },      
        link: function(scope, element, attrs) {
         var expressionHandler = scope.outsideCallback();  
          angular.element($window).on('click', function (event) {    
              if (element[0].contains(event.target))
              {                  
              } else {                 
                expressionHandler();                
             }           
                         
            });
        }
    };
});

"use strict";

app.filter('employeefilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchEmployee        = scope.searchEmployee;
			if(!searchEmployee){
				return input;
			}

			if(searchEmployee)
			{
				var removeSpaceFromString = searchEmployee.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							var fullName = obj.first_name+obj.last_name;
								if(fullName.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}
						});
		}
		
		return input;

	};

});


"use Strict";

app.controller('faqController',['$scope',
	function($scope){

		$scope.panesA = [
        {
          id: 'pane-1a',
          header: 'Do I get to keep the bag?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.',
          isExpanded: true
        },
        {
          id: 'pane-2a',
          header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'
        },
        {
          id: 'pane-3a',
          header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'          
        },
         {
          id: 'pane-4a',
         header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'          
        },
         {
          id: 'pane-5a',
          header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'          
        },
         {
          id: 'pane-6a',
          header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'          
        },
         {
          id: 'pane-7a',
          header: 'How can I tell the weight of my laundry?',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sem lorem, venenatis eget mauris vitae, faucibus tincidunt elit. Phasellus nec quam eu quam pharetra suscipit faucibus at magna. Curabitur maximus nulla vitae tellus semper molestie.'          
        },
      ];
          

}]);
"use strict";

app.controller('homeController',['$scope','$rootScope','$routeParams','$mdDialog','globalRequest','localStorageService','$location','$timeout',
	function($scope,$rootScope,$routeParams,$mdDialog,globalRequest,localStorageService,$location,$timeout){

		/*******************************
		* Get current user information
		********************************/

		var userData = $rootScope.currentUser;

		/*******************************
		* Get parameter from path.
		* 1st argument is parameter name
		* 2nd argument is path
		********************************/
		
		function getUrlParameter(param, dummyPath) {

		        var sPageURL = dummyPath || window.location.search.substring(1),
		            sURLVariables = sPageURL.split(/[&||?]/),
		            res;

		        for (var i = 0; i < sURLVariables.length; i += 1) {
		            var paramName = sURLVariables[i],
		                sParameterName = (paramName || '').split('=');

		            if (sParameterName[0] === param) {
		                res = sParameterName[1];
		            }
		        }

		        return res;
		}



		/*******************************
		* If url have parameter
		********************************/

		if($routeParams.data)
		{

			var decodeurl     = window.atob($routeParams.data);
			var paramdata     = getUrlParameter('formtype',decodeurl);
			var contactNumber = getUrlParameter('contact_number',decodeurl);
			var empID 	      = getUrlParameter('employee_id',decodeurl);


			/*******************************************
			* If user already logged in
			* & requsted contact number is not matched
			* then, redirect
			********************************************/



			if(userData && userData.contact_number != contactNumber)
			{
				$location.path('/');
			} else if(userData && userData.contact_number == contactNumber){

				/*******************************************
				* If user already logged in
				* & requested contact number is matched
				* then, update user and hotel
				********************************************/

				inviteRequest();

			} else {

				/*******************
				* Check user status
				*******************/

				if(paramdata  == 'invitation')
				{
					var request={
						url:window.__API_PATH.CHECK_USER,
						method:"POST",
						data:{
							contact_number    : contactNumber,
							employee_id       : empID
						}
					};
					
					globalRequest.jotCRUD(request).then(function(response){				


						/***********************
						* If user not exists
						***********************/

						if(response.status == 1)
						{
							$mdDialog.show({
								templateUrl : "/modules/invitation/views/invitation_register.html",
			        			controller  :  "invitationController",
								parent: angular.element(document.body),
								fullscreen: $scope.customFullscreen,
								clickOutsideToClose:false,		
								locals:{empDetail:decodeurl}							
							}).then(function(answer) {}, function() {});
						}

						/***********************
						* If user already exists
						***********************/

						if(response.status == 2)
						{
							$mdDialog.show({
								templateUrl : "/modules/invitation/views/invitation_signin.html",
			        			controller  :  "invitationController",
								parent: angular.element(document.body),
								fullscreen: $scope.customFullscreen,
								clickOutsideToClose:false,		
								locals:{empDetail:decodeurl}							
							}).then(function(answer) {}, function() {});
						}



						/**************************************
						* If user already registered with hotel
						**************************************/

						if(response.status == 3)
						{
							$location.path('/');
						}

					});
				}

			}
			
		}


		/****************************************
		* Update invited user information 
		****************************************/


		function inviteRequest(){
			var signInRequest={
				url:window.__API_PATH.UPDATE_EMPLOYEE,
				method:"POST",
				data:{
					employee_id 			: getUrlParameter('employee_id',decodeurl),	
					hotel_id 				: getUrlParameter('hotel_id',decodeurl),
					contact_number          : getUrlParameter('contact_number',decodeurl),
				}
			};

			globalRequest.jotCRUD(signInRequest).then(function(response){	
				
				if(response.status == 1)
				{

					var user = localStorageService.get('user');
					user.hotel_id.push(getUrlParameter('hotel_id',decodeurl));					
					localStorageService.set('user', user);
					
					$location.path('/dashboard');
					$rootScope.popupData  = {
								text:  'Congratulations! You have successfully registered.',
								action: 'redirect'
					};
					 $timeout(function() {
					 	$rootScope.popup = true;
					 }, 500);
				}							
				
			});
		}	

		/*******************************
		* Owl carousel parameter 
		********************************/

  		$scope.config={
		    navigation: false,
		    items:1,	     
		    navContainer: '#customNav',
		    pagination: false,
		    rewindNav : true,
		    autoplay:true,
		    autoplayTimeout:3000,	
		    autoplayHoverPause:true
		};		 
	 
}]);
"use strict";

app.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				var defaultOptions = {
				};
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				// init carousel
				$(element).owlCarousel(defaultOptions);
			};
		}
	};
});
app.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
			}
		}
	};
}]);
"use strict";

app.controller('invitationController',['$scope','$rootScope','empDetail','globalRequest','$timeout','$mdDialog','$location','loginFactory','localStorageService','AuthSrv',
	function($scope,$rootScope,empDetail,globalRequest,$timeout,$mdDialog,$location,loginFactory,localStorageService,AuthSrv){

		function getUrlParameter(param, dummyPath) {
		        var sPageURL = dummyPath || window.location.search.substring(1),
		            sURLVariables = sPageURL.split(/[&||?]/),
		            res;

		        for (var i = 0; i < sURLVariables.length; i += 1) {
		            var paramName = sURLVariables[i],
		                sParameterName = (paramName || '').split('=');

		            if (sParameterName[0] === param) {
		                res = sParameterName[1];
		            }
		        }

		        return res;
		}


		$scope.invite_first_name 	  = getUrlParameter('first_name',empDetail);
		$scope.invite_last_name  	  = getUrlParameter('last_name',empDetail);
		$scope.invite_contact_number  = getUrlParameter('contact_number',empDetail);
		$scope.invite_email           = getUrlParameter('email',empDetail);
		$scope.token                  = getUrlParameter('token',empDetail);
		$scope.profileImage  		  = [];
		


		/************************************************
		* Register user for invited hotel
		************************************************/	

		$scope.inviteRegisterUser = function(){

			var request={
				url:window.__API_PATH.MEMBER_SIGNUP,
				method:"POST",
				data:{
					first_name 			: $scope.invite_first_name,
					last_name 		    : $scope.invite_last_name,
					contact_number 		: getUrlParameter('contact_number',empDetail),
					email 			    : getUrlParameter('email',empDetail),
					token				: $scope.token,
					profile_image  		: '',
					password            : $scope.invite_password
				}
			};

			
			if($scope.profileImage.length > 0)
			{	

			/********************************************
			*  Upload profile image if exists
			********************************************/		


				globalRequest.uploadFiles(null,'profile_image',$scope.profileImage).then(function(profileResponse){
					$scope.registerImageResult =  profileResponse;


					/********************************************
					*  Register user with profile image
					********************************************/

					request.data.profile_image = profileResponse.result[0].filename;
					
					globalRequest.jotCRUD(request).then(function(response){					
						if(response.status == 1)
						{
							$mdDialog.cancel();					
							$location.path('/');
							$rootScope.popupData  = {
										text:  'Congratulations! You have successfully registered.',
										action: 'redirect'
							};
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 500);
						} else {
							$mdDialog.cancel();					
							$location.path('/');
						}
					});

				});


			} else {

				/********************************************
				*  Register user without profile image
				********************************************/
				
				globalRequest.jotCRUD(request).then(function(response){					
					if(response.status == 1)
					{
						$mdDialog.cancel();					
						$location.path('/');
						$rootScope.popupData  = {
									text:  'Congratulations! You have successfully registered.',
									action: 'redirect'
						};
						 $timeout(function() {
						 	$rootScope.popup = true;
						 }, 500);
					} else {
						$mdDialog.cancel();					
						$location.path('/');
					}
				});

			}
			
			
		};


		/************************************************
		* Add use in invited hotel if already registered
		************************************************/


		$scope.inviteSignINUser  = function(){
			
			var loginrequest={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:{
							email    : $scope.invite_login,
							password : $scope.invite_signinpassword
					}
				};

				loginFactory.login(loginrequest).then(function(response){
				$scope.loginresult = response;

				if(response.status == 1)
				{

					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
					inviteRequest();
				}
				
			});				

		};

		/********************************************
		*  Keep uploaded file in temp scope
		********************************************/

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profileImage = files;
		};


		/****************************************
		* Update invited user information 
		****************************************/

		function inviteRequest(){
			var signInRequest={
				url:window.__API_PATH.UPDATE_EMPLOYEE,
				method:"POST",
				data:{
					employee_id 			: getUrlParameter('employee_id',empDetail),	
					hotel_id 				: getUrlParameter('hotel_id',empDetail),
					contact_number          : $scope.invite_login
				}
			};

			globalRequest.jotCRUD(signInRequest).then(function(response){	
				
				if(response.status == 1)
				{

					var user = localStorageService.get('user', user);

					user.hotel_id.push(getUrlParameter('hotel_id',empDetail));
					localStorageService.set('user', user);

					$mdDialog.cancel();
					$location.path('/dashboard');
					$rootScope.popupData  = {
								text:  'Congratulations! You have successfully registered.',
								action: 'redirect'
					};
					 $timeout(function() {
					 	$rootScope.popup = true;
					 }, 500);
				}							
				
			});
		}





		 
	 
}]);
"use strict";

app.controller('attachmentListCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

			$scope.deleteAttachment = function(hashKey){

				$rootScope.files = $rootScope.files.filter(function(key){
					return key.$$hashKey != hashKey;
				});
			};
	}
]);
"use strict";

app.controller('checklistCtlr', ['$scope','$rootScope','toastService','$timeout',
	function($scope,$rootScope,toastService,$timeout) {

		/*****************************************
		* Default checklist
		*****************************************/

		$rootScope.checklist =  [
									{
										checklist_name:'Checklist1',
										item_list: [
										{name:'item1',status:0},{name:'item2',status:0},{name:'item3',status:0}
										]									
									},

									{
										checklist_name:'Checklist2',
										item_list: [
										{name:'item1',status:0},{name:'item2',status:0},{name:'item3',status:0}
										]									
									}
									
								];


		/*****************************************
		* Add new checklist
		*****************************************/
		
		
		$scope.addchecklist = function(){	
				$scope.mainItemError = '';
				if(!$scope.checklist_heading || $scope.checklist_heading == '')
				{
					
				} else {
					var storedCheckbox = $scope.checklist_heading;					
					$rootScope.checklist.push({checklist_name:storedCheckbox,item_list:[]});
					$scope.checklist_heading = '';
					$scope.showChecklistAdd = false;
					
				}	

				
		};


		/*****************************************
		* Add Sub-item in checklist
		*****************************************/
		
		$scope.addChecklistSubitem = function(index,itemName){
		

			if(itemName && itemName != "")
			{
				var alreadyExits  = $rootScope.checklist[index].item_list.filter(function(iValue){	
										return  iValue.name === itemName;
									});
			
				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
                	toastService.alert(popup);
				} else {
					
					$rootScope.checklist[index].item_list.push({name:itemName,status:0});
					$scope.ctlr.checklist_subitem[index]   = '';
				}
										
			}
			
		};


		/*****************************************
		* Store values of checklist in scope 
		*****************************************/

		$scope.storeChecklist = function(index,subIndex,modelValue){

			if(modelValue)
			{
				$rootScope.checklist[index].item_list[subIndex].status = 1;
			} else {
				$rootScope.checklist[index].item_list[subIndex].status = 0;
				
			}
			
		};

		/*****************************************
		* Edit parent list 
		*****************************************/

		$scope.editParentList = function(index,itemValue){			
			if(!itemValue || itemValue == "")
			{
				$scope.ctlr.editParent[index] = false;
			} else {
				$rootScope.checklist[index].checklist_name = itemValue;							
				$scope.ctlr.editParent[index] = false;
			}
						
		};


		/*****************************************
		* Delete checklist
		*****************************************/

		$scope.deleteChecklist = function(index){			
			$rootScope.checklist.splice(index, 1);
			$scope.ctlr.editParent[index] = false;									
		};




		/*****************************************
		* Edit subitem 
		*****************************************/

		$scope.editSubItem = function(index,oldValue,newValue,subINdex){	

			if($scope.ctlr.sublist)
			{
				if($scope.ctlr.sublist[index][subINdex])
				{
					$scope.ctlr.sublist[index][subINdex] = true;
				}
			}

			/************************************
			* Check edit field is empty or not
			************************************/

			if(!newValue || newValue == "") {

				/************************************
				* if empty,
				* Then remove subitem
				************************************/
				$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){						
							return checklist.name != oldValue;
						});
			} else {

				/****************************************
				* if not empty,
				* Then replace subitem value with new
				*****************************************/
				
				var sublistCount = -1;	
				var alreadyExits  = $rootScope.checklist[index].item_list.filter(function(iValue){
										sublistCount++;								

										if(sublistCount == subINdex)
										{
											return false;
										}	
										return  iValue.name === newValue;									
										
									});

				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
	            	toastService.alert(popup);
				} else {
		
					$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){
							if(checklist.name == oldValue)
							{
								checklist.name = newValue;
							}
							return checklist;
						});
					
					$scope.ctlr.editList[index][subINdex] = false;

				}

			}				
					
		};		


		/*****************************************
		* Delete item from sublist
		*****************************************/

		$scope.deleteSublistItem = function(index,itemValue,subindex){	
				
			/* Remove subitem */

			$rootScope.checklist[index].item_list = $rootScope.checklist[index].item_list.filter(function(checklist){	
					return checklist.name != itemValue;
				});
			$scope.ctlr.editList[index][subindex] = false;


			/* Reassign value to all left checkbox */
			if($scope.ctlr.sublist)
			{
				$scope.ctlr.sublist[index] = {};
				angular.forEach($rootScope.checklist[index].item_list,function(value,key){
					if(value.status ==1)
					{
						$scope.ctlr.sublist[index][key] = true;	
					} else {
						$scope.ctlr.sublist[index][key] = false;	
					}
				}); 
			}			
								
		};	

	}
]);

"use strict";

app.controller('departmentCtlr', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {
		

		/*****************************************
		* Get department List
		******************************************/

	    //globalRequest.getDepartments();

	     /*after click on suggestion list*/                            
	    $scope.callback = function(){	       
	        $scope.deparmentfocus = true;
	         
	    };

	    if(!$rootScope.departmentList)
	    {
	   		globalRequest.getDepartments();
	    }

	}
]);
"use strict";

app.controller('dueDataCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Default Date
		*
		*/
		if(!$rootScope.due_date)
		{
			$rootScope.due_date = new Date(new Date().getTime());
		}

	}
]);

"use strict";

app.controller("hotelBoardController",['$scope','$rootScope','$routeParams','globalRequest','localStorageService','$location','$mdDialog','$route',
	function($scope,$rootScope,$routeParams,globalRequest,localStorageService,$location,$mdDialog,$route){

		/**********************************************************
	    * Get active hotel data
	    **********************************************************/
	    $rootScope.bglayout = false;
		//$scope.activeHotelData   = localStorageService.get('hotel');


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;

		/**************************************************
		* Redirect if hotel obj not found in localstorage
		**************************************************/

		if(!$rootScope.activeHotelData || $rootScope.activeHotelData == ""){
			$location.path('/dashboard');
			return false;
		}


		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getDepartments();

		/************************************
		* Get department list
		*************************************/			
		
		globalRequest.getStaff();


		$scope.activetype = $routeParams.type;
		if($routeParams.type)
		{

			/**************************************
			* Get jot list
			**************************************/		
			var JotType = $routeParams.type;
			$rootScope.JotListData = '';
			globalRequest.getJotList(JotType);			
			$scope.BoardsPage = true;
			

		} else {

			/**************************************
			* Get jot count
			**************************************/	
			globalRequest.getJotCount();
			$scope.BoardsPage = false;
		}


		/**************************************
		* Edit jot popup
		**************************************/

		$scope.jotEditPopup = function(jotData){
			$scope.edit_jot		   		= jotData;		
			$scope.jot_title   			= jotData.jot_title;
			$rootScope.jot_description	= jotData.jot_description;
			$rootScope.jot_members		= jotData.jot_members;
			$rootScope.due_date    		= new Date(jotData.due_date);
			$rootScope.priority    		= jotData.priority;
			$rootScope.department  		= jotData.department;
			$rootScope.hotel_room  		= jotData.hotel_room;
			
			
		};



		/**************************************
		* Open comment popup
		**************************************/

		$scope.openComments = function(jotData){			
			$mdDialog.show({
				controller: 'jotCommentCtlr',
				controllerAs: 'ctlr',
				templateUrl: '/modules/jot/views/jot_comments.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,
				locals: {jotData:jotData}
			});
		};

		/**************************************
		* Appned Department of click of icon
		**************************************/

		$scope.selectDept = function(depatAbbr){
			var checkAlreadyExists = $rootScope.department.match(/\#[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('#'+depatAbbr);
            }
             if(match > -1)
            {
              return false;
            }
            
			$rootScope.department = $rootScope.department+' #'+depatAbbr+' ';
		};

		/**************************************
		* Update item list
		**************************************/

		$scope.updateItemList = function(item){

			var itemIndex = $scope.boards.indexOf(item);
			if(itemIndex > -1)
			{
				$scope.boards.splice(itemIndex, 1);
			} else {
				$scope.boards.push(item);
			}

			var hotelDataObj = {
				 		hotel_id     	   : $rootScope.activeHotelData._id,
				 		jot_types 		   : $scope.boards
				};

			var request={
						url:window.__API_PATH.UPDATE_HOTEL,
						method:"PUT",
						data:hotelDataObj
				};

			globalRequest.jotCRUD(request).then(function(response){	
				localStorageService.set('hotel',response.result);
				window.location.reload();
			});


		};

		
	}
]);
"use strict";

app.controller('iconCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {


	    /*****************************************
		* Keep attachment files in scope
		*****************************************/
	    
		$scope.uploadFiles = function(files, errFiles) {	
			$rootScope.files  = files;
	    };

	    /*****************************************
		* Open staff list
		*****************************************/

	    $scope.openMemberList	=	function(userName){	    	
	    	if($rootScope.clickopen)
	    	{
	    		$rootScope.clickopen = false;	    		
	    	} else {
	    		$rootScope.clickopen = true;
	    	}	    	
	    };


	}
]);
"use strict";

app.controller('issueCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type = 'issue';
		$rootScope.directory = 'issue';	

	}
]);

"use strict";

app.controller('jotCommentCtlr', ['$scope','globalRequest','$rootScope','$mdDialog','jotData','toastService','$timeout',
	function($scope,globalRequest,$rootScope,$mdDialog,jotData,toastService,$timeout) {

		var userDetail = $rootScope.currentUser;	
		$scope.getMonthList = window.__API_PATH.MONTH;
		
		$scope.edit_jot		   			= jotData;		
		$scope.jot_title   				= $scope.edit_jot.jot_title;
		$rootScope.jot_description		= $scope.edit_jot.jot_description;
		$rootScope.directory  			= jotData.jot_type;
		$rootScope.jot_members			= $scope.edit_jot.jot_members;
		$rootScope.due_date    			= new Date($scope.edit_jot.due_date);
		$rootScope.priority    			= $scope.edit_jot.priority;
		$rootScope.status    			= $scope.edit_jot.status;
		$rootScope.department  			= $scope.edit_jot.department;
		$rootScope.files      			= '';
		$rootScope.progress      		= -1;
		$scope.commentImages 			= '';
		$rootScope.checklist  			= [];
		$scope.checklist  		    	= jotData.checklist;
		$scope.assigned_departments     = jotData.assigned_departments;
		$scope.assigned_members  		= jotData.assigned_members;
		$scope.task_type  		        = jotData.task_type;


		$scope.submitComment = function(){

			/**************************************
			* Check & upload file for comment
			**************************************/			

			if($scope.Commentfiles)
			{

				globalRequest.uploadFiles(jotData.hotel_id,'comments',$scope.Commentfiles).then(function (response) {				
	                $timeout(function () {
	                   var result = response.result;

	                    /**************************************
						* Add new comment with attchment
						**************************************/	 

	                    var commentRequest={
							url:window.__API_PATH.ADD_COMMENT,
							method:"POST",
							data:{					
								hotel_id 			: jotData.hotel_id, 
								jot_id 				: jotData._id, 
								user_id 			: userDetail._id, 
								attachment 			: result, 
								post_date 			: new Date().getTime(), 
								message 			: $scope.message, 
							}
						};

						globalRequest.jotCRUD(commentRequest).then(function(response){
									
							var popup = {"message":response.message,"class":response.class};
							toastService.alert(popup);

							if(response.status == 1)
							{
								getComments();
								$scope.Commentfiles  = '';
								$scope.message 		 = "";
							}							

						});
	                });
	            });
			} else {
				
				/******************************************
				* Add new comment if attachment not exists
				******************************************/

				if($scope.message == '' || !$scope.message)
				{
					var popup = {
							"message":"Please write some comment.","class":""
						};
					toastService.errors(popup);
					return false;
				}

				var commentRequest={
					url:window.__API_PATH.ADD_COMMENT,
					method:"POST",
					data:{					
						hotel_id 			: jotData.hotel_id, 
						jot_id 				: jotData._id, 
						user_id 			: userDetail._id, 						
						post_date 			: new Date().getTime(), 
						message 			: $scope.message, 
					}
				};

				globalRequest.jotCRUD(commentRequest).then(function(response){	
					getComments();		
					var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);					
					$scope.message 		 = "";

				});

			}

		};

		/**************************************
		* Clear comment
		**************************************/

		$scope.cancelComment = function(){
			$scope.commentImages = [];
			$scope.message 		 = "";
			$scope.files 		 = "";
		};

		/**************************************
		* Appned staff member of click of icon
		**************************************/

		$scope.selectStaff = function(userName){
			var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('@'+userName);
            }
             if(match > -1)
            {
              return false;
            }

			$rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
		};

		/**************************************
		* Appned Department of click of icon
		**************************************/

		$scope.selectDept = function(depatAbbr){

			var checkAlreadyExists = $rootScope.department.match(/\#[a-z,0-9,_\/.-]+/gmi);
            var match = -1;
            if(checkAlreadyExists)
            {
              match = checkAlreadyExists.indexOf('#'+depatAbbr);
            }
             if(match > -1)
            {
              return false;
            }

			$rootScope.department = $rootScope.department+' #'+depatAbbr+' ';
		};
		


		/**************************************
		* Get comments
		**************************************/

		function getComments(){

			var getCommentRequest={
				url:window.__API_PATH.GET_COMMENT,
				method:"GET",
				params:{					
					hotel_id 			: jotData.hotel_id, 
					jot_id 				: jotData._id
				}
			};
			globalRequest.jotCRUD(getCommentRequest).then(function(response){
				$scope.commentList = response.result;	
	
			});
		}
		getComments();


		/*****************************************
		* Jot image upload
		*****************************************/
		$scope.commentImages = '';
		$scope.uploadFiles = function(files, errFiles,uploadType) {

			if(uploadType == "comment")
			{

				$scope.Commentfiles = files;
			}

			if(uploadType == "sidebar")
			{

				globalRequest.uploadFiles(jotData.hotel_id,jotData.jot_type,files).then(function (response) {
		                $timeout(function () {
		                    var result = response.result; 					

							angular.forEach(result, function(data) {				
					            if(data.status){
					            	jotData.image = jotData.image.concat(data);
					            }
					        });
							jotData.image = jotData.image.filter(function(key){
									if(key){ return key;}
							});	
							updateJotMethod({image:jotData.image});
					    	

		                });
		            });
		        
			}	

	    };


	    /**************************************
		* Delete attachment
		**************************************/

		$scope.deleteCommentAttachment = function(imageHashKey){
			
			$scope.Commentfiles = $scope.Commentfiles.filter(function(key){
				return key.$$hashKey != imageHashKey;
			});

		};



	    /**************************************
		* Save comment
		**************************************/

		function updateJotMethod(paramArgs){

			var JotRequest = {
					url:window.__API_PATH.UPDATE_JOT,
					method:"put",
					data:{
						jot_id 			: jotData._id					
					}
				};	

			Object.assign(JotRequest.data, paramArgs);

			globalRequest.jotCRUD(JotRequest).then(function(response){			
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				var JotType = jotData.jot_type;
				globalRequest.getJotList(JotType); 
				$rootScope.files   		 = '';				
				$scope.showDesc = false;

			});
		}

		/**************************************
		* Cancel description
		**************************************/

		$scope.cancelDesc = function(){
			$rootScope.files   		 = '';
			$rootScope.progress      = -1;

		};

		/**************************************
		* Delete attachment
		**************************************/

		$scope.deleteAttachment = function(file){

			jotData.image = jotData.image.filter(function(obj){
				return obj.filename != file.filename;
			});

			var imageRequest = {
					image           : jotData.image
				};

			updateJotMethod(imageRequest);			
		};



		/**************************************
		* Update description
		**************************************/

		$scope.saveDescription = function(){			

			/****************************
			* Upload file if exists
			****************************/

			if($rootScope.files && $rootScope.files.length > 0)
			{
				globalRequest.uploadFiles(null,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
	                if(fileRasponse.status == 1)
	                {
	                    $rootScope.files   = '';
	                	jotData.image      = jotData.image.concat(fileRasponse.result);


	                	jotData.image = jotData.image.filter(function(key){
								if(key){ return key;}
						});
						var descRequest = {
								jot_description : $rootScope.jot_description,
								image           : jotData.image
							};

						updateJotMethod(descRequest);
	                }
	            });
			} else {

				var descRequest = {
						jot_description : $rootScope.jot_description,						
					};
				updateJotMethod(descRequest);

			}
		};

		/**************************************
		* Update member
		**************************************/

	    $scope.saveMember = function(){
	    	var memberRequest = {jot_members : $rootScope.jot_members};
	    	var membersArray = $rootScope.jot_members.match(/\@[a-z,0-9]+/gmi);
	    	membersArray.filter(function(obj){
	    		obj = obj.replace("@", "");
		    	if($scope.assigned_members.indexOf(obj) < 0)
		    	{
		    		$scope.assigned_members.push(obj);
		    	}	    		
	    	});
	    	
	    	updateJotMethod(memberRequest);
	    	

	    };

	    /**************************************
		* Update due date
		**************************************/

	    $scope.saveDueDate = function(){
	    	var memberRequest = {due_date : new Date($rootScope.due_date).getTime()};
			updateJotMethod(memberRequest);

	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.saveDept = function(){
	    	var deptRequest = {department : $rootScope.department};

	    	var departmentArray = $rootScope.department.match(/\#[a-z,0-9]+/gmi);
	    	departmentArray.filter(function(obj){
	    		obj = obj.replace("#", "");
		    	if($scope.assigned_departments.indexOf(obj) < 0)
		    	{
		    		$scope.assigned_departments.push(obj);
		    	}	    		
	    	});

			updateJotMethod(deptRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePriority = function(){
	    	var priorityRequest = {priority : $rootScope.priority};
			updateJotMethod(priorityRequest);
	    };

	    /**************************************
		* Update department
		**************************************/

	    $scope.savePattern = function(){
	    	var task = '';
                  if($rootScope.taskTime == 'onetime')
                  {
                     task = {
                      type: 'onetime',
                      date: new Date($rootScope.onetime_date).getTime()
                    };
                  } 

                  if($rootScope.taskTime == 'recurring'){

                    var pattern = '';
                    if($rootScope.selectedPattern == 'weekly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays,
                              
                             };
                    } 


                    if($rootScope.selectedPattern == 'yearly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              month: $rootScope.yealy_month,
                              date : $rootScope.yearly_day      
                             };
                    } 


                    if($rootScope.selectedPattern == 'monthly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              date : $rootScope.monthly_recurring_date
                             };
                    }

                    if($rootScope.selectedPattern == 'daily')
                    {
                      pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays
                             };
                    }

                    task = {
                      type       : 'recurring',
                      start_date : new Date($rootScope.start_recurring_date).getTime(),
                      end_date   : new Date($rootScope.end_recurring_date).getTime(),
                      pattern: pattern
                    };
                  } 
	    	var patternRequest = {task_type : task};

	    	$scope.task_type = task;
			updateJotMethod(patternRequest);
	    };


	    /**************************************
		* Change status
		**************************************/

		$scope.changeStatus = function(){
			
			if($rootScope.status == 'close')
			{
				$rootScope.status = 'open';
			} else {
				$rootScope.status = 'close';
			}

			var stausRequst = {status:$rootScope.status};
			updateJotMethod(stausRequst);

		};
			

	    /**************************************
		* Close popup
		**************************************/

		$scope.close = function(){
			 $mdDialog.cancel();
		};



	/*************************************************************************************************************************************************************************************************************************************************************************************************************************************/




		/*****************************************
		* Add new checklist
		*****************************************/
		
		
		$scope.addchecklist = function(){	
				$scope.mainItemError = '';
				if(!$scope.checklist_heading || $scope.checklist_heading == '')
				{
					
				} else {
					var storedCheckbox = $scope.checklist_heading;					
					$scope.checklist.push({checklist_name:storedCheckbox,item_list:[]});
					$scope.checklist_heading = '';
					$scope.showChecklistAdd = false;
				}
				
		};


		/*****************************************
		* Add Sub-item in checklist
		*****************************************/
		
		$scope.addChecklistSubitem = function(index,itemName){
		

			if(itemName && itemName != "")
			{
				var alreadyExits  = $scope.checklist[index].item_list.filter(function(iValue){	
										return  iValue.name === itemName;
									});
			
				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
                	toastService.alert(popup);
				} else {
					
					$scope.checklist[index].item_list.push({name:itemName,status:0});
					$scope.ctlr.checklist_subitem[index]   = '';
				}
										
			}
			
		};


		/*****************************************
		* Store values of checklist in scope 
		*****************************************/

		$scope.storeChecklist = function(index,subIndex,modelValue){

			if(modelValue)
			{
				$scope.checklist[index].item_list[subIndex].status = 1;
			} else {
				$scope.checklist[index].item_list[subIndex].status = 0;
				
			}
			
		};

		/*****************************************
		* Edit parent list 
		*****************************************/

		$scope.editParentList = function(index,itemValue){			
			if(!itemValue || itemValue == "")
			{
				$scope.ctlr.editParent[index] = false;
			} else {
				$scope.checklist[index].checklist_name = itemValue;							
				$scope.ctlr.editParent[index] = false;
			}
						
		};


		/*****************************************
		* Delete checklist
		*****************************************/

		$scope.deleteChecklist = function(index){			
			$scope.checklist.splice(index, 1);
			$scope.ctlr.editParent[index] = false;									
		};




		/*****************************************
		* Edit subitem 
		*****************************************/

		$scope.editSubItem = function(index,oldValue,newValue,subINdex){	

			if($scope.ctlr.sublist)
			{
				if($scope.ctlr.sublist[index][subINdex])
				{
					$scope.ctlr.sublist[index][subINdex] = true;
				}
			}

			/************************************
			* Check edit field is empty or not
			************************************/

			if(!newValue || newValue == "") {

				/************************************
				* if empty,
				* Then remove subitem
				************************************/
				$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){						
							return checklist.name != oldValue;
						});
			} else {

				/****************************************
				* if not empty,
				* Then replace subitem value with new
				*****************************************/

				var sublistCount = -1;	
				var alreadyExits  = $scope.checklist[index].item_list.filter(function(iValue){
										sublistCount++;								

										if(sublistCount == subINdex)
										{
											return false;
										}	
										return  iValue.name === newValue;
									});

				if(alreadyExits.length > 0)
				{
					var popup = {"message":"Item already exists.","class":""};
	            	toastService.alert(popup);
				} else {
		
					$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){
							if(checklist.name == oldValue)
							{
								checklist.name = newValue;
							}
							return checklist;
						});
					
					$scope.ctlr.editList[index][subINdex] = false;

				}

			}				
					
		};		


		/*****************************************
		* Delete item from sublist
		*****************************************/

		$scope.deleteSublistItem = function(index,itemValue,subindex){

				/* Remove subitem */

				$scope.checklist[index].item_list = $scope.checklist[index].item_list.filter(function(checklist){	
						return checklist.name != itemValue;
					});
				$scope.ctlr.editList[index][subindex] = false;


				/* Reassign value to all left checkbox */
				if($scope.ctlr.sublist)
				{
					$scope.ctlr.sublist[index] = {};
					angular.forEach($scope.checklist[index].item_list,function(value,key){
						if(value.status ==1)
						{
							$scope.ctlr.sublist[index][key] = true;	
						} else {
							$scope.ctlr.sublist[index][key] = false;	
						}
					}); 
				}	
								
		};	

		/**************************************
		* Update Checklist
		**************************************/


		$scope.updateChecklist = function(index,subIndex,modelValue){
			
			if(modelValue)
			{
				$scope.checklist[index].item_list[subIndex].status = 1;				
			} else {
				$scope.checklist[index].item_list[subIndex].status = 0;				
			}	

		};

		$scope.saveChecklist = function(){	
			var checklistRequest = {checklist : $scope.checklist};
			updateJotMethod(checklistRequest);
		};

	}
]);
"use strict";

app.controller('jotPopupCtrl', ['$scope','$rootScope','$mdDialog','ActivateTab','globalRequest',
	function($scope,$rootScope,$mdDialog,ActivateTab,globalRequest) {
		
		/*
		* Activate tab
		*/
		$scope.currentNavItem   = ActivateTab;	

		/**********************************************************
	    * Get staff list
	    **********************************************************/

		globalRequest.getStaff();

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;

		/*
		* Function
		*
		* Close popup of new hotel add.
		*
		*/
		$scope.close = function(){
			 $mdDialog.cancel();
		};
	}
]);

"use strict";

app.controller('jotQuickCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
			
			/*
			*
			* Set jot type list
			*
			*/
			$rootScope.jot_type  = 'quick';
			$rootScope.directory = 'quick';

			$scope.jotSelect = function(event,value){
				$rootScope.jot_type = value;
			};
	}
]);

"use strict";

app.controller('messagesCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'messages';
		$rootScope.directory = 'messages';	
	}
]);

"use strict";

app.controller('moveDcController', ['$scope','$rootScope','globalRequest','Detail','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,Detail,$mdDialog,toastService) {
		var hotel = $rootScope.activeHotelData;

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/

		angular.forEach(Detail.detail,function (value,key) {

		    if(key == 'department'){
				$rootScope.department = value;
			} else if(key == 'image'){
				$scope.filesData = value;
			} else {
				$scope[key] = value;
			}
		});	

	

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.MovItemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


		/************************************
		* Edit document
		*************************************/		

		$scope.moveToDC = function(){	
	
			var request = {
		            url:window.__API_PATH.MOVE_DOCUMENT,
		            method:"POST",
		            data:{
		            	hotel_id      	   		:  hotel._id,
		            	document_name   		:  $scope.mov_document_name,
		            	department      		:  $rootScope.department,
		            	tags        			:  $scope.movectrl.MovItemTagModel,
		            	document_description    :  $scope.mov_document_description,
		            	files       		    :  $scope.filesData,
		            	upload_date				:  new Date().getTime(),
		            	jot_id					:  $scope._id,
		            	jot_type				:  $scope.jot_type
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
				
			 	$scope.docMoveResult = response;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		var popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}

			 });

		};

		/************************************
		* Remove files by index
		*************************************/	

		$scope.removeImageIndex = function(fData){
			$scope.filesData = $scope.filesData.filter(function( obj ) {
			    return obj.filename != fData.filename;
			});

		};

	}
]);
"use strict";

app.controller('noteCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'note';
		$rootScope.directory = 'note';	
	}
]);

"use strict";

app.controller('priorityCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {

		/*
		*
		* Set jot priority type on click
		*
		*/

		$scope.jotPriorityList 	= window.__API_PATH.JOT_PRIORITY;
		if(!$rootScope.priority)
		{
			$rootScope.priority = window.__API_PATH.JOT_PRIORITY[0].name;
		}		

		$scope.selectPriority = function(event,value){
			 $rootScope.priority 	= value;
		};

	}
]);

"use restrict";

app.controller('roomCtlr',['$scope',function($scope){

}]);
"use strict";

app.controller('staffCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
	     
	     /*after click on suggestion list*/                                                            
	    $scope.callbackStaff = function(){
	            $scope.staffFocus = true;        
	    };
	}
]);

"use strict";

app.controller('taskCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {
		/*
		*
		* Set default jot type
		*
		*/	
		$rootScope.jot_type  = 'task';
		$rootScope.directory = 'task';		
	
	}
]);

"use strict";

app.controller('taskDatepickerCtlr', ['$scope','$rootScope',
	function($scope,$rootScope) {	


		/*
		* Get day list in array
		*/
		
		$scope.getDay = function(num) {
		    return new Array(num);   
		};

		/*
		* Make task pattern
		*/
		$scope.getMonth = window.__API_PATH.MONTH;
		$scope.patterns = window.__API_PATH.RECURRING_PATTERN;
		$scope.weeks    = window.__API_PATH.WEEK_NAME;
		$rootScope.selectedDays = [];

		 
		/*
		* Show/Hide pattern
		*/

		$scope.patternShow = function(pattern){
			$rootScope.selectedPattern = pattern.id;		
			$scope.selectedPatternDesc = pattern.description;	
	        $rootScope.selectedDays = [];

	        if(pattern.id == 'daily' || pattern.id == 'weekly')
			{	
				/***** Auto check all week value *****/	
				
				angular.forEach($scope.weeks, function (item) {
					if(pattern.id == 'daily')
					{
						item.Selected = true;	
						$rootScope.selectedDays.push(item.value);
					} else {
						item.Selected = false;
						$rootScope.selectedDays = [];
					}		            
		            
		        });				
				
			}
			
			

		};		

		/*
		* Store pattern on temp variable
		*/

		  
		  $scope.toggleWeek = function(selected,weekValue) {
			  var index = $rootScope.selectedDays.indexOf(weekValue);		 
			  if (index > -1) 
			  {
				$rootScope.selectedDays.splice(index, 1);
			  }
			  else
			  {
			    $rootScope.selectedDays.push(weekValue);
			  }
			  
		  };
				
	}
]);

"use strict";

app.directive('departmentypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            departmentypeahead: '=',
            departmenttypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list" ng-show="enabledepartmentFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (departmentypeahead | filterdepartment:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {

                scope.enabledepartmentFilter = true;
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {
                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('#');
              replaceWord       = '#'+replaceWord[1];

        			var selectedValue = "#"+item.abbreviation;

    
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);  

        			scope.ngModel = replacedValue;
        			scope.selected = item;

              if(scope.departmenttypeaheadCallback) {
                    scope.departmenttypeaheadCallback(item);
              }
              elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				        if(scope.selected && scope.selected.department_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusDepartment', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.deparmentfocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.deparmentfocus = false;
                     }
              });
          }
      };
    });

"use strict";
app.directive('editJotDirectives', ['globalRequest','$rootScope','$mdDialog','toastService',
	function(globalRequest,$rootScope,$mdDialog,toastService){
            return {
         
                link: function ($scope, element, attr) {


					/**************************************
					* Open move to dc form
					**************************************/

					$scope.moveDC = function(detail){	
						$mdDialog.show({	
							controller: 'moveDcController',
							controllerAs: 'movectrl',			
						    templateUrl: '/modules/jot/views/move_dc.html',
							multiple: true,
							clickOutsideToClose:true,
							fullscreen: $scope.customFullscreen,
							locals:{Detail:{detail:detail,prevScope:$scope}}				
						}).then(function(answer) {}, function() {});

					};



					/**************************************
					* Change status
					**************************************/

					$scope.changeStatus = function(){
						if($scope.edit_jot.status == 'close')
						{
							$scope.edit_jot.status = 'open';
						} else {
							$scope.edit_jot.status = 'close';
						}
					};
					
					/**************************************
					* Update Jot
					**************************************/

					$scope.saveUpdatedJot = function(){
						$scope.edit_jot.jot_id				= $scope.edit_jot._id;
						$scope.edit_jot.jot_title			= $scope.jot_title;
						$scope.edit_jot.jot_description		= $rootScope.jot_description;
						$scope.edit_jot.jot_members		    = $rootScope.jot_members;
						$scope.edit_jot.due_date    		= new Date($rootScope.due_date).getTime();
						$scope.edit_jot.priority   		    = $rootScope.priority;
						$scope.edit_jot.department 		 	= $rootScope.department;
						$scope.edit_jot.hotel_room 		 	= $rootScope.hotel_room;
					

						var request={
							url:window.__API_PATH.UPDATE_JOT,
							method:"put",
							data:$scope.edit_jot
						};

						globalRequest.jotCRUD(request).then(function(response){
							var popup;	
							if(response.status ==1)
							{
								var JotType = $scope.edit_jot.jot_type;
								globalRequest.getJotList(JotType); 	

								$mdDialog.cancel();
								popup = {"message":response.message,"class":response.class};
								toastService.alert(popup);
							} else {

								var errors = '<ul class="mdToast-error-list">';
								angular.forEach(response.errors,function(value,key){
										console.log(value);
									errors += '<li>'+value.message+'</li>';
								});
								errors += '</ul>';								
								popup = {"message":errors,"class":""};
								toastService.errors(popup);
							} 
							
						});
					};

				
					/**************************************
					* Archive Jot
					**************************************/

					$scope.archiveJot = function(){
						var jotid = {jot_id:$scope.edit_jot._id};

						var request={
							url:window.__API_PATH.DELETE_JOT,
							method:"DELETE",
							params:jotid
						};
						
						globalRequest.jotCRUD(request).then(function(response){				
							var JotType = $scope.edit_jot.jot_type;
							globalRequest.getJotList(JotType); 
							$mdDialog.cancel();
							var popup = {"message":response.message,"class":response.class};
							toastService.alert(popup);
						});
					};


					/**************************************
					* Appned staff member of click of icon
					**************************************/

					$scope.selectStaff = function(userName){
						var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);
		                var match = -1;
		                if(checkAlreadyExists)
		                {
		                  match = checkAlreadyExists.indexOf('@'+userName);
		                }
		                 if(match > -1)
		                {
		                  return false;
		                }
						$rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
					};

					/**************************************
					* Close popup
					**************************************/
					$scope.close = function(){
						 $mdDialog.cancel();
					};
                    
                }
            };
    }]);




"use strict";

app.directive('iconstafflistsuggestion', ['$compile', '$timeout','$rootScope',function($compile, $timeout,$rootScope) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            iconstafflistsuggestion: '=',
            iconstaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
              $rootScope.clickopen = false;
              var template = '<ul class="" style="display:block;"><li ng-repeat="item in filitered = (iconstafflistsuggestion | filter:$root.filtermember) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                 
                  if($event.keyCode == 38 && scope.active > 0) { 
                      scope.active--;
                      scope.$digest();
                  } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                      scope.active++;
                      scope.$digest();
                  } else if($event.keyCode == 13) {
                      scope.click(scope.filitered[scope.active]);
                  }
              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                
                var username  = item.user_name;
                    username  = username.trim();                
                var appendValue = "@"+username+" ";               
                
                $rootScope.$broadcast('addUserNameAtMousePosition',appendValue);
                $rootScope.clickopen = false;
                $rootScope.filtermember = '';
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
                
                  if(scope.selected && scope.selected.user_name == input) {
                        return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));                       
        }
    };
}]);
"use strict";

app.directive('textareastaffsuggestion', ['$compile', '$timeout','$rootScope','replaceOccurence', function($compile, $timeout,$rootScope,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            textareastaffsuggestion: '=',
            textareadepartmentsuggestion: '=',
            textareastaffsuggestionCallback: "="
        },
        link: function(scope, elem, attrs) {
           
              var template = '<div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (textareastaffsuggestion | filterstaffJotDesc:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>    <div class="dropdown suggestions_list" ng-show="enableDescFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !descFilitered.length || selected"><li ng-repeat="item in descFilitered = (textareadepartmentsuggestion | descDepartmentFilter:this) track by $index" ng-click="click(item)" style="cursor:pointer" ng-class="{active:$index==active}" ng-mouseenter="mouseenter($index)"><a>{{item.department_name}} ({{item.abbreviation}})</a></li></ul></div>';

              elem.bind('blur', function() {
                  $timeout(function() {
                      scope.selected = true;
                  }, 100);
              });

              /*****************************************
              * Navigate list item on mouse key
              ******************************************/

              elem.bind("keydown", function($event) {
                scope.enableDescFilter = true;
                

                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 ){
                   
                  /********** For user list  ***********/
                   if(scope.filitered)
                    {
                      if(scope.active < scope.filitered.length - 1)
                      {
                        scope.active++;
                        scope.$digest();
                      }               
                    }

                    /********** For department list  ***********/

                    if(scope.descFilitered)
                    {
                       if(scope.active < scope.descFilitered.length - 1)
                        {
                          scope.active++;
                          scope.$digest();
                        }
                    }
                    
                } else if($event.keyCode == 13) { 

                    /********** For user list  ***********/                 
                    if(scope.filitered){
                      scope.$apply(function() {
                          scope.click(scope.filitered[scope.active]);
                      });
                    }
                    /********** For department list  ***********/
                     if(scope.descFilitered){
                        scope.$apply(function() {
                            scope.click(scope.descFilitered[scope.active]);
                        });
                      } 


                }

              });

              /***************************************************
              * Replace word with selected suggestion list item
              ***************************************************/

              scope.click = function(item) {
                var replaceString     = scope.ngModel;
          			var replaceWord       = scope.matchWord;
                var selectedValue;
                /********** For user list  ***********/
                if(scope.filitered)
                {
                  replaceWord           = replaceWord.split('@');
                  replaceWord           = '@'+replaceWord[1];
          			  selectedValue         = "@"+item.user_name;
                }

                /********** For department list  ***********/
                if(scope.descFilitered)
                {    
                  replaceWord           = replaceWord.split('#');
                  replaceWord           = '#'+replaceWord[1];
                  selectedValue     = "#"+item.abbreviation;
                }

          			var replacedValue     = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);
                  
          				scope.ngModel = replacedValue;
          				scope.selected = item;


                  scope.$watch(item, function(input) {
                      $rootScope.descFocus = true; 
                   });

                  /*if(scope.textareastaffsuggestionCallback) {
                      scope.textareastaffsuggestionCallback(item);
                  }*/
                  elem[0].blur();
              };

              /*********************************************
              * Set index on mouse click on list
              **********************************************/

              scope.mouseenter = function($index) {
                  scope.active = $index;
              };

              scope.$watch('ngModel', function(input) {
              	
      				    if(scope.selected && scope.selected.user_name == input) {
                      	return;
                  }
                  scope.active = 0;
                  scope.selected = false;
              });

            /*********************************************
            * Append template under element
            **********************************************/
            elem.after($compile(template)(scope));

            /*********************************************
            * Add user name on click user suggestion list
            **********************************************/

            $rootScope.$on('addUserNameAtMousePosition', function(e, val) {
                var domElement = elem[0];

                if (document.selection) {
                  domElement.focus();
                  var sel = document.selection.createRange();
                  sel.text = val;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                  
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                  var startPos = domElement.selectionStart;
                  var endPos = domElement.selectionEnd;

                  domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);

                  $rootScope.jot_description = domElement.value;

                  domElement.selectionStart = startPos + val.length;
                  domElement.selectionEnd = startPos + val.length;
                  $timeout(function() {                        
                      domElement.focus();
                  });
                } else {
                  
                  domElement.value += val;       
                  $rootScope.jot_description = domElement.value;

                  $timeout(function() {                        
                      domElement.focus();
                  });
                }

              }); 

            
        }
    };
}]).directive('focusDesc', function($timeout, $parse,$rootScope) {
      return {          

          link: function(scope, element, attrs) {

              var model = $parse(attrs.focusMe);
              $rootScope.$watch(function(value) {
                     if(value.descFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                          $rootScope.descFocus = '';
                      });                      
                     }
              });
          }
      };
  });
"use strict";

app.directive('jotFormSubmitDirectives', function($rootScope, $mdDialog,toastService,globalRequest,$routeParams,socket) {
      return {
          
          link: function($scope, element, attrs) {
            var hotel = $rootScope.activeHotelData;
            /***************************************************
            * Prevent form submit on enter key
            ***************************************************/
            element.bind("keydown", function($event) {
                 if($event.keyCode == 13)
                 {
                  $event.preventDefault();
                 }
              });
                

              /*
              * Blank field before open form
              */

              $rootScope.priority = $rootScope.due_date = $rootScope.department =  $rootScope.jot_members = $rootScope.department = $rootScope.taskTime = $rootScope.start_recurring_date = $rootScope.end_recurring_date = $rootScope.jot_description = $rootScope.files = $rootScope.jot_title  =  '';
              $rootScope.progress = -1;



              /**************************************
              * Appned staff member of click of icon
              **************************************/

              /*$scope.selectStaff = function(userName){
                var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);
                var match = -1;
                if(checkAlreadyExists)
                {
                  match = checkAlreadyExists.indexOf('@'+userName);
                }
                 if(match > -1)
                {
                  return false;
                }
                $rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
              };*/

              $scope.selectStaff = function(userName){
        
                if($rootScope.jot_members)
                { 
                  var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi); 
                  var match = -1;
                  if(checkAlreadyExists)
                  {
                    match = checkAlreadyExists.indexOf('@'+userName);
                  }
                  if(match > -1)
                  {
                    return false;
                  }
                  $rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
                } else {
                  $rootScope.jot_members = ' @'+userName+' ';
                }
                
              };

              /**************************************
              * Appned Department of click of icon
              **************************************/

              $scope.selectDept = function(depatAbbr){
                 var checkAlreadyExists = $rootScope.department.match(/\#[a-z,0-9,_\/.-]+/gmi);
                var match = -1;
                if(checkAlreadyExists)
                {
                  match = checkAlreadyExists.indexOf('#'+depatAbbr);
                }
                 if(match > -1)
                {
                  return false;
                }

                $rootScope.department = $rootScope.department+' #'+depatAbbr+' ';
              };
                           
                

                /******************************************************************
                ||  Create jot 
                ******************************************************************/

              $scope.createJot = function(){

                  /*console.log($rootScope);
                  console.log($rootScope.selectedPattern);
                  return false;*/
                  

                  /**
                  ||  Start task Jot Data json 
                  **/

                  var task = '';
                  if($rootScope.taskTime == 'onetime')
                  {
                     task = {
                      type: 'onetime',
                      date: new Date($rootScope.onetime_date).getTime()
                    };
                  } 

                  if($rootScope.taskTime == 'recurring'){

                    var pattern = '';
                    if($rootScope.selectedPattern == 'weekly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays,
                              
                             };
                    } 


                    if($rootScope.selectedPattern == 'yearly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              month: $rootScope.yealy_month,
                              date : $rootScope.yearly_day      
                             };
                    } 


                    if($rootScope.selectedPattern == 'monthly')
                    {
                       pattern = {
                              type : $rootScope.selectedPattern,
                              date : $rootScope.monthly_recurring_date
                             };
                    }

                    if($rootScope.selectedPattern == 'daily')
                    {
                      pattern = {
                              type : $rootScope.selectedPattern,
                              days : $rootScope.selectedDays
                             };
                    }

                    task = {
                      type       : 'recurring',
                      start_date : new Date($rootScope.start_recurring_date).getTime(),
                      end_date   : new Date($rootScope.end_recurring_date).getTime(),
                      pattern: pattern
                    };
                  }                  
                  /*******************************
                  ||  End task Jot Data json 
                  *******************************/
                

                  $scope.message = ' ';
                  
                  
                  var jotDataArray = {
                      jot_title           : $rootScope.jot_title,
                      jot_description     : $rootScope.jot_description,
                      jot_members         : $rootScope.jot_members,
                      priority            : $rootScope.priority,
                      hotel_id            : hotel._id,
                      jot_type            : $rootScope.jot_type,
                      hotel_room          : $rootScope.hotel_room,
                      due_date            : new Date($rootScope.due_date).getTime() || '',
                      department          : $rootScope.department,                      
                      checklist           : $rootScope.checklist,                        
                      task_type           : task,
                      status              : 'open'
                  };

                  /*console.log($rootScope.checklist);
                  return false;*/

                  var request={
                    url:window.__API_PATH.CREATE_JOT,
                    method:"POST",
                    data:jotDataArray
                  };
                  
                  globalRequest.jotCRUD(request).then(function(response){
                    
                    
                    if(response.status == 1)
                    {
                      var jotID = response.result._id;

                      socket.emit('jot_create_notification',response.result);

                      /****************************
                      * Upload file if exists
                      ****************************/

                      if($rootScope.files && $rootScope.files.length > 0)
                      {
                     
                        globalRequest.uploadFiles(hotel._id,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
                            if(fileRasponse.status == 1)
                            {
                              var updateRequest={
                                    url:window.__API_PATH.UPDATE_JOT,
                                    method:"PUT",
                                    data:{
                                      jot_id : jotID,
                                      image  : fileRasponse.result
                                    }
                                  };


                              /****************************
                              * Update files in jot 
                              ****************************/

                              globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                                if(updateResponse.status == 1)
                                {
                                  $rootScope.files = [];
                                  var JotType = $routeParams.type;
                                  globalRequest.getJotList(JotType);
                                  $mdDialog.cancel();
                                  var popup = {"message":response.message,"class":"success"};
                                  toastService.alert(popup);
                                }

                              });  
                            }
                        });
                      } else {

                          var JotType = $routeParams.type;
                          globalRequest.getJotList(JotType);
                          $mdDialog.cancel();
                          var popup = {"message":response.message,"class":"success"};
                          toastService.alert(popup);
                      }
                    } else {
                        
                        var errors = '<ul class="mdToast-error-list">';
                        angular.forEach(response.errors,function(value,key){
                          errors += '<li>'+value.message+'</li>';
                        });
                        errors += '</ul>';
                        var errorpopup = {"message":errors,"class":""};
                        toastService.errors(errorpopup);
                    }
                    
                  });

                };


                /*
                *
                * Set jot priority type on click
                *
                */

                $scope.jotPriorityList  = window.__API_PATH.JOT_PRIORITY;
                $scope.jot_priority   = $scope.jotPriorityList[0].name;

                $scope.selectPriority = function(event,value){
                   $scope.jot_priority = value;
                };

                
          }
      };
    });

"use strict";
app.directive('jotTemplate', ['$rootScope',function($rootScope){
	return {
		scope:{jotTemplate:'='},
		template:'<span ng-include="template"></span>',
		link: function(scope,ele){

			function isJSON(str) {
			    try {
			        JSON.parse(str);
			    } catch (e) {
			        return false;
			    }
			    return true;
			}	
			var templateData;		
			scope.$watch('jotTemplate', function(templateName){
				
				if (isJSON(templateName))
				{
				    templateData = JSON.parse(templateName);
				}else{					
				    templateData = templateName;
				}
				
				scope.template='/modules/'+templateData.directory+'/views/'+templateData.id+'.html';
				
				$rootScope.activeNav = templateData.id;
			});

		}
	};
}]);
"use strict";

app.directive('stafftypeahead', ['$compile', '$timeout','replaceOccurence', function($compile, $timeout,replaceOccurence) {

    return {
        restrict: 'A',
        transclude: true,
        scope: {
            ngModel: '=',
            stafftypeahead: '=',
            stafftypeaheadCallback: "="
        },
        link: function(scope, elem, attrs) {

            var template = '<div class="dropdown suggestions_list" ng-show="enableStaffFilter"><ul class="" style="display:block;" ng-hide="!ngModel.length || !filitered.length || selected"><li ng-repeat="item in filitered = (stafftypeahead | filterstaff:this) track by $index"  style="cursor:pointer" ng-class="{active:$index==active}" ng-click="click(item)" ng-mouseenter="mouseenter($index)"><a>{{item.first_name}} {{item.last_name}}({{item.user_name}})</a></li></ul></div>';

            elem.bind('blur', function() {
                $timeout(function() {
                    scope.selected = true;
                }, 100);
            });

            /*****************************************
            * Navigate list item on mouse key
            ******************************************/

            elem.bind("keydown", function($event) {

                scope.enableStaffFilter = true;
                if($event.keyCode == 38 && scope.active > 0) { 
                    scope.active--;
                    scope.$digest();
                } else if($event.keyCode == 40 && scope.active < scope.filitered.length - 1) {
                    scope.active++;
                    scope.$digest();
                } else if($event.keyCode == 13) {

                    scope.$apply(function() {
                        scope.click(scope.filitered[scope.active]);
                    });
                }
            });

            scope.click = function(item) {
              
              var replaceString = scope.ngModel;
        			var replaceWord   = scope.matchWord;
              replaceWord       = replaceWord.split('@');
              replaceWord       = '@'+replaceWord[1];
        			var selectedValue = "@"+item.user_name;
              
        			var replacedValue = replaceOccurence.replaceAll(replaceString,replaceWord, selectedValue);             
              
      				scope.ngModel = replacedValue;
      				scope.selected = item;

                if(scope.stafftypeaheadCallback) {
                    scope.stafftypeaheadCallback(item);
                }
                elem[0].blur();
            };

            scope.mouseenter = function($index) {
                scope.active = $index;
            };

            scope.$watch('ngModel', function(input) {
            	
				if(scope.selected && scope.selected.user_name == input) {
                	return;
                }
                scope.active = 0;
                scope.selected = false;
            });
            elem.after($compile(template)(scope));
        }
    };
}]).directive('focusStaff', function($timeout, $parse) {
      return {
          
          link: function(scope, element, attrs) {
              var model = $parse(attrs.focusMe);
              scope.$watch(function(value) {
                     if(value.staffFocus)
                     {            
                      $timeout(function() {                        
                          element[0].focus();
                      });
                      scope.staffFocus = false;
                     }
              });
          }
      };
    });

"use strict";

app.filter("filterdepartment", function(cursorPosition) {
         return function(input,scope) {
         	var text     = document.getElementById("department");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\#[a-z,0-9,_\/.-]+/gmi);
			var countAtRate    = word.match(/\#/gm);
		
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '#')
				{
					var removeHash = word.split("#");
					removeHash = removeHash[1];
					scope.matchWord = word;						
					angular.forEach(input,function(value,key){
						var listedDepartment = value.department_name;
						var abbreviation     = value.abbreviation;

						listedDepartment     = listedDepartment.toLowerCase();
						abbreviation         = abbreviation.toLowerCase();
						removeHash           = removeHash.toLowerCase();

						if(listedDepartment.startsWith(removeHash) || abbreviation.startsWith(removeHash))
						{						
							searchedString.push(value);
						}
					});	
				}			
				return searchedString;
			}
			
         };

}).filter("filterstaff", function(cursorPosition) {

         return function(input,scope) {

         	var text     = document.getElementById("staff");
			var caretPos = cursorPosition.GetCaretPosition(text);
            var word     = cursorPosition.ReturnWord(text.value, caretPos);

            var detectUserName = word.match(/\@[a-z,0-9,_\/.-]+/gmi);
			var countAtRate    = word.match(/\@/gm);
			
			if(detectUserName && countAtRate.length == 1)
			{
				var searchedString 	= [];
				if(word.substring(0, 1) == '@')
				{
					var removeAtRate = word.split("@");
					
					removeAtRate = removeAtRate[1];
					scope.matchWord = word;
					
					angular.forEach(input,function(value,key){

						var first_name  = value.first_name;
						var last_name   = value.last_name;
						var user_name   = value.user_name;
						user_name       = user_name.toLowerCase();
						var listedstaff = first_name+last_name;
						
						listedstaff     = listedstaff.toLowerCase();
						removeAtRate    = removeAtRate.toLowerCase();
						
						if(listedstaff.startsWith(removeAtRate) || user_name.startsWith(removeAtRate))
						{						
							searchedString.push(value);
						}

					});		
				}		
				return searchedString;
			}
         };

}).filter("filterstaffJotDesc", function(cursorPosition) {

         return function(input,scope) {
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\@[a-z,0-9,_\/.-]+/gmi);
				var countAtRate    = word.match(/\@/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = false;
					scope.detectusers 		= true;
					var searchedString 	= [];
					if(word.substring(0, 1) == '@')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("@");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var first_name  = value.first_name;
							var last_name   = value.last_name;
							var user_name   = value.user_name;
							user_name       = user_name.toLowerCase();
							var listedstaff = first_name+last_name;


							listedstaff     = listedstaff.toLowerCase();
							removeAtRate    = removeAtRate.toLowerCase();

							if(listedstaff.startsWith(removeAtRate) || user_name.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
			
         };

}).filter("descDepartmentFilter", function(cursorPosition) {

         return function(input,scope) {
         		
	         	var text     = document.getElementById("jot_description");
				var caretPos = cursorPosition.GetCaretPosition(text);
	            var word     = cursorPosition.ReturnWord(text.value, caretPos);

	            var detectUserName = word.match(/\#[a-z,0-9,_\/.-]+/gmi);
				var countAtRate    = word.match(/\#/gm);
						
				if(detectUserName)
				{

					scope.detectdepartment = true;
					scope.detectusers 		= false;

					var searchedString 	= [];
					if(word.substring(0, 1) == '#')
					{						
						scope.matchWord = word;		

						var removeAtRate = word.split("#");					
						removeAtRate     = removeAtRate[1];
						angular.forEach(input,function(value,key){
							var department_name = value.department_name;
							var abbreviation    = value.abbreviation;

							department_name     = department_name.toLowerCase();
							abbreviation        = abbreviation.toLowerCase();

							removeAtRate        = removeAtRate.toLowerCase();
							if(department_name.startsWith(removeAtRate) || abbreviation.startsWith(removeAtRate))
							{						
								searchedString.push(value);
							}
						});
					}									
					return searchedString;
				}
         };

}).filter("checklistFilter", function() {
         return function(input,scope) {         		
         		var totalComplete = 0;
	         	angular.forEach(input,function(value,key){
	         		var completeSub = 0;
	         		angular.forEach(value.item_list,function(value1,key1){
	         			if(value1.status == 1)
	         			{
	         				completeSub = completeSub+1;
	         			}	         			
	         		});

	         		if(value.item_list.length == completeSub)
	         		{
	         			totalComplete = totalComplete+1; 
	         		}
	         	});

	         	return totalComplete+'/'+input.length;
         };

}).filter('departmentJotFilter',function(){
	return function(input,scope){

		if(input)
		{
			var searchDeptWise        = scope.searchDepartment;
			if(!searchDeptWise || searchDeptWise.length == 0){
				return input;
			}

			input   =   input.filter(function( obj ) {
							var jotAssignedDept = obj.assigned_departments;

							for(var i=0; i< searchDeptWise.length; i++){
								var getIndex = jotAssignedDept.indexOf(searchDeptWise[i]);
								if(getIndex != -1)
								{
									return true;
								}
							}							
						});
		}		
		return input;
	};

}).filter('empJotFilter',function(){
	return function(input,scope){

		if(input)
		{
			var searchEmpWise  = scope.searchEmp;
			if(!searchEmpWise || searchEmpWise.length == 0){
				return input;
			}

			input   =   input.filter(function( obj ) {
							var jotAssignedDept = obj.assigned_members;
							for(var i=0; i< searchEmpWise.length; i++){
								var getIndex = jotAssignedDept.indexOf(searchEmpWise[i]);
								if(getIndex != -1)
								{
									return true;
								}
							}							
						});
		}		
		return input;
	};
});
"use strict";

app.controller('loginController', ['$scope','$location','localStorageService','loginFactory','$rootScope','AuthSrv','$mdDialog','$timeout','$cookies','socket',
	function($scope,$location, localStorageService,loginFactory,$rootScope,AuthSrv,$mdDialog,$timeout,$cookies,socket) {	


		/*********************************************
		* Submit login form
		***********************************************/
		
		$scope.loginUser = function (obj) {
		
	        var dataObj = {
					email : $scope.email,
					password : $scope.password
			};	

			var request={
					url:window.__API_PATH.LOGIN,
					method:"POST",
					data:dataObj
				};
				
			loginFactory.login(request).then(function(response){
				$scope.loginresult = response;

				if(response.status == 1)
				{
					
					socket.emit('web.login',response.result.user);

					var now = new Date();
					if($scope.remember && $scope.remember == 1)
					{		

				       now.setFullYear(now.getFullYear() + 1);
				       $cookies.put("hoteljot", window.btoa('rememberloggedin'), {
					            expires: now
					    });	

					} else {											
					   now.setDate(now.getDate() + 1);
					   $cookies.put("hoteljot", window.btoa('sessionloggedin'), []);	
					}	
		
					localStorageService.set('token', response.result.token);
					localStorageService.set('user', response.result.user);
					AuthSrv.isLogged = true;
				    $mdDialog.cancel();
					$location.path('/dashboard');
				}									
								
			});				
	               
		};

		/*********************************************
		* Forget password
		***********************************************/

		$scope.forgetPassword = function(){

			var data = {email:$scope.forget_email};
			var request={
					url:window.__API_PATH.FORGET_PASSWORD,
					method:"POST",
					data:data
				};

			loginFactory.login(request).then(function(response){
					$scope.forgetresult = response;
					if(response.status == 1)
						{
							
						$rootScope.popupData = {text:response.message,action:'ok'};
						$timeout(function() {
						 	$mdDialog.cancel();
						 }, 200);
						 $timeout(function() {
						 	$rootScope.popup = true;
						 }, 300);	
					 }
			});

		};

		/*********************************************
		* Redirect to signup form
		***********************************************/

		$scope.openSignupForm = function (obj) {
	          $mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});  
		};
	}
]);
"use strict";

app.controller('resetPasswordCtlr', ['$scope','loginFactory','$rootScope','$routeParams','$location','$mdDialog','$timeout',
	function($scope,loginFactory,$rootScope,$routeParams,$location,$mdDialog,$timeout) {	

		var token = $routeParams.token;

		if($routeParams.expired && $routeParams.expired == 'true')
		{
			$mdDialog.cancel();
			//$location.path('/');
			$rootScope.popupData  = {
						text:  'Link has been expired.',
						action: 'redirect'
			};
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 500);
		}
		
		

		/*********************************************
		* Forget password
		***********************************************/
		$scope.resetResult = {message:"",class:""};
		
		$scope.resetPass = function(){
			if($scope.forget_password == $scope.forget_confirm_password)
			{
				var data = {password:$scope.forget_password,token:token};
				var request={
						url:window.__API_PATH.PASSWORD_RESET,
						method:"POST",
						data:data
				};

				loginFactory.login(request).then(function(response){
						$scope.resetResult = response;
						
						if(response.status == 1)
						{
							
							$timeout(function() {
							 	$location.path('/');
							 }, 200);
							$rootScope.popupData = {text:response.message,action:'ok'};	
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 300);	
						 }
				});
			} else {
				$scope.resetResult.message = 'Password is not match with confirm password.';
				$scope.resetResult.class = 'Autherror';
				$scope.resetResult.status = 2;
			}			
			
		};

	}
]);
'use strict';

app.factory('loginFactory', ['$http', function ($http) {
	return{		
		
		login: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);
"use strict";

app.controller('editLostFoundController', ['$scope','$rootScope','globalRequest','lstFndDetail','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,lstFndDetail,$mdDialog,toastService) {
		var hotel = $rootScope.activeHotelData;

		$rootScope.files = '';

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.search_tag = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
				
		angular.forEach(lstFndDetail.detail,function (value,key) {

			if(key == 'date')
			{
				$scope[key] = new Date(value);
			} else if(key == 'search_tag')
			{
				$scope.ctrl.search_tag = value.split(',');
			}else if(key == 'description')
			{
				$rootScope.jot_description = value;
			}
			else {
				$scope[key] = value;
			}
		    
		});

	
	    /*****************************************
		* Update found item
		*****************************************/

		$scope.editFoundItem = function(){

	 		/****************************
            * Upload file if exists
            ****************************/

            var popup;

            if($rootScope.files && $rootScope.files.length > 0)
            {

            	globalRequest.uploadFiles(hotel._id,'lost_found',$rootScope.files).then(function(fileRasponse){
                    if(fileRasponse.status == 1)
                    {
                    	var mergeImages      = lstFndDetail.detail.image.concat(fileRasponse.result);

                        var updateRequest={
                            url:window.__API_PATH.UPDATE_LOST_FOUND,
                            method:"PUT",
                            data:{  
                              _id  		     : $scope._id,
							  description    : $rootScope.jot_description,			 
							  title    		 : $scope.title,			 
							  place 		 : $scope.place,	
							  date 	 		 : new Date($scope.date).getTime(),			
							  image  		 : mergeImages,		  
							  no_of_items 	 : $scope.no_of_items,				  
							  category 	     : $scope.category,			  
							  status 	     : $scope.status,			  
							  contact 	     : $scope.contact,				  
							  search_tag 	 : $scope.ctrl.search_tag,
                            }
                        };


                      /****************************
                      * Update files in lost found 
                      ****************************/

                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                        if(updateResponse.status == 1)
                        {
                          $rootScope.files = '';
                          globalRequest.getFoundList();
                          $mdDialog.cancel();
		                  popup = {"message":updateResponse.message,"class":"success"};
		                  toastService.alert(popup);
                        }  else {

					 		var errors = '<ul class="mdToast-error-list">';
							angular.forEach(updateResponse.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';
							popup = {"message":errors,"class":""};
							toastService.errors(popup);
					 	}

                      });  
                    }  else {

				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(fileRasponse.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}
                });

            } else {

            	/****************************
                * If no attachment uploaded
                ****************************/


            	var DataArray = {
					  _id  		     : $scope._id,
					  description    : $rootScope.jot_description,				 
					  title          : $scope.title,			 
					  place 		 : $scope.place,	
					  date 	 		 : new Date($scope.date).getTime(),				  
					  no_of_items 	 : $scope.no_of_items,				  
					  category 	     : $scope.category,			  
					  status 	     : $scope.status,			  
					  contact 	     : $scope.contact,				  
					  search_tag 	 : $scope.ctrl.search_tag,				  
					};

					var request={
	                    url:window.__API_PATH.UPDATE_LOST_FOUND,
	                    method:"PUT",
	                    data:DataArray
	                  };
    
   
					globalRequest.jotCRUD(request).then(function(response){ 
						
						if(response.status ==1)
						{
							globalRequest.getFoundList();
							$mdDialog.cancel();
							popup = {"message":response.message,"class":"success"};
							toastService.alert(popup);
						}  else {

					 		var errors = '<ul class="mdToast-error-list">';
							angular.forEach(response.errors,function(value,key){
								errors += '<li>'+value.message+'</li>';
							});
							errors += '</ul>';
							popup = {"message":errors,"class":""};
							toastService.errors(popup);
					 	}
					});
            }	


		};

	}
]);
"use strict";

app.controller('lostFoundCtlr', ['$scope','$rootScope','globalRequest','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,toastService,$mdDialog) {
		var hotel = $rootScope.activeHotelData;
		$rootScope.directory = 'lost_found';
		$rootScope.jot_description = $rootScope.files = '';

		/*****************************************
		* Get Staff List
		******************************************/

		globalRequest.getStaff();

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.itemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

	    /**********************************************************
	    * Submit lost & found
	    **********************************************************/

	    $scope.submitLostFound = function(){
	    	
	    	$scope.message = ' ';			
			var DataArray = {
			  description    : $rootScope.jot_description,
			  title          : $rootScope.jot_title,
			  hotel_id       : hotel._id,				  
			  place 		 : $scope.lost_place,	
			  date 	 		 : new Date($scope.lost_date).getTime(),			  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.lost_category,			  
			  status 	     : $scope.lost_status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};

			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };            	
           
            globalRequest.jotCRUD(request).then(function(response){
                
                var lostFoundID = response.result._id;

                if(response.status == 1)
                {

                	/****************************
	                * Upload file if exists
	                ****************************/

	                if($rootScope.files && $rootScope.files.length > 0)
	                {


	                	globalRequest.uploadFiles(hotel._id,$rootScope.directory,$rootScope.files).then(function(fileRasponse){
                            if(fileRasponse.status == 1)
                            {
                              var updateRequest={
                                    url:window.__API_PATH.UPDATE_LOST_FOUND,
                                    method:"PUT",
                                    data:{
                                      _id : lostFoundID,
                                      image  : fileRasponse.result
                                    }
                                  };


                              /****************************
                              * Update files in lost found 
                              ****************************/

                              globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                                if(updateResponse.status == 1)
                                {
                                  $rootScope.files = [];
                                  $mdDialog.cancel();
				                  var popup = {"message":response.message,"class":"success"};
				                  toastService.alert(popup);
                                }

                              });  
                            }
                        });

	                } else {
	                	$mdDialog.cancel();
						var popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
	                }

                }
            });      
	    };
	}
]);
"use strict";

app.controller('lostFoundManagementController',['$scope','$rootScope','globalRequest','toastService','$mdDialog',
	function($scope,$rootScope,globalRequest,toastService,$mdDialog){

		var hotel = $rootScope.activeHotelData;

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = hotel.jot_types;

		/************************************
		* Get employee list
		*************************************/		
		globalRequest.getStaff();

		/*****************************************
		* Get department List
		******************************************/

	    globalRequest.getDepartments();

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$rootScope.jot_description = "";
			$scope.image = "";
			$scope.foundImages = "";
			$rootScope.files = "";
			$scope.place = "";
			$scope.date = "";
			$scope.no_of_items = "";
			$scope.category = "";
			$scope.status = "";
			$scope.ctrl.itemTagModel = [];
			$scope.contact = "";
			$scope.foundProgress = -1;
		};

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.itemTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };


		/************************************
		* Get lost found item list
		*************************************/			
		
		globalRequest.getFoundList();


		/*****************************************
		* Add found item
		*****************************************/

		$scope.addfoundItem = function(){

			var DataArray = {
			  description    : $rootScope.jot_description,
			  title          : $scope.title,
			  hotel_id       : hotel._id,	
			  image          : $scope.foundImages,
			  place 		 : $scope.place,	
			  date 	 		 : new Date($scope.date).getTime(),				  
			  no_of_items 	 : $scope.no_of_items,				  
			  category 	     : $scope.category,			  
			  status 	     : $scope.status,			  
			  contact 	     : $scope.contact,				  
			  search_tag 	 : $scope.ctrl.itemTagModel,				  
			};

			var request={
                    url:window.__API_PATH.LOST_FOUND,
                    method:"POST",
                    data:DataArray
                  };
            
           
            globalRequest.jotCRUD(request).then(function(response){ 
            	var popup;
            	
                if(response.status == 1)
                {
                	var lostFoundID = response.result._id;

                	/****************************
		            * Upload file if exists
		            ****************************/

		            if($rootScope.files && $rootScope.files.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'lost_found',$rootScope.files).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {
				                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_LOST_FOUND,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : lostFoundID,
		                              image   		 : fileRasponse.result							  
		                            }
		                        };


			                      /****************************
			                      * Update files in lost found 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            $rootScope.files = '';
			                            globalRequest.getFoundList();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	globalRequest.getFoundList();
				    	popup = {"message":response.message,"class":"success"};
	                    toastService.alert(popup);
	                    $scope.blank();

				    }
                }  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
            });
		};


		/*****************************************
		* Open edit department
		*****************************************/	

		$scope.openEditLostFound = function(detail){
				$mdDialog.show({
					controller: 'editLostFoundController',
					controllerAs: 'ctrl',
					templateUrl: '/modules/lost_found/views/edit_lost_found.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{lstFndDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete employee
		*****************************************/	

		$scope.removeList = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_LOST_FOUND,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){	
				if(response.status == 1)
				{
					$scope.LstFndList.splice(index, 1);
				}
							
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};
}]);
"use strict";

app.controller('bookingReportController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;

		var that = this;

		    this.isOpen = false;

		    this.openCalendar = function(e) {
		    	console.log('test');
		        e.preventDefault();
		        e.stopPropagation();

		        that.isOpen = true;
		    };


		/************************************
		* Get reports list
		*************************************/			
		
		globalRequest.getBookingReports();


		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = $rootScope.activeHotelData.jot_types;


		/************************************
		* Cancel booking
		*************************************/

		$scope.cancelBooking = function(id,$index){

			var request={
				url:window.__API_PATH.CANCEL_BOOKING,
				method:"PUT",
				data:{_id:id}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getBookingReports();
			});
		};


		/************************************
		* Change payment status
		*************************************/

		$scope.paymentStatus = function(report,status){

			var request={
				url:window.__API_PATH.PAYMENT_STATUS,
				method:"PUT",
				data:{_id:report._id,payment_status:status}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getReports();
			});
		};


		/*****************************************
		* Open reports detail
		*****************************************/	

		$scope.openReportDetail = function(detail){
			$mdDialog.show({
				controller: 'detailController',
				templateUrl: '/modules/meeting/views/reports_detail.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{infoDetail:detail}				
			}).then(function(answer) {}, function() {});

		};


		/************************************
		* Show seller information in popup
		*************************************/

		$scope.showSellerInfo = function(report){
				
			var infoDetail = report.seller_detail[0];
			infoDetail.hotel_id = report.hotel_id;
			$mdDialog.show({
					controller: 'detailController',
					templateUrl: '/modules/meeting/views/seller_detail.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{infoDetail:infoDetail}				
				}).then(function(answer) {}, function() {});
		};

		/************************************
		* Show room information in popup
		*************************************/

		$scope.showRoomInfo = function(report){

			var infoDetail = report.room_detail[0];
			infoDetail.hotel_id = report.hotel_id;
			$mdDialog.show({
					controller: 'detailController',
					templateUrl: '/modules/meeting/views/room_detail.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{infoDetail:infoDetail}				
				}).then(function(answer) {}, function() {});
		};
	
		
	}
]);





"use strict";

app.controller('detailController', ['$scope','infoDetail',
	function($scope,infoDetail) {


		/************************************
		* Get facilities
		*************************************/

		$scope.roomStyleList = [
			{
				_id: 1,
				name: "Auditorium",
				attachment_type: "image",
				capacity: '40max',
				src:"assets/images/audi.gif",
			},
			{
				_id: 2,
				name: "Banquet",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/Banquet.gif"
			},
			{
				_id: 3,
				name: "Hollow Square",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/hollow.gif"
			},
			{
				_id: 4,
				name: "Classroom",
				attachment_type: "image",
				capacity: '100max',
				src:"assets/images/class.gif"
			},
			{
				_id: 5,
				name: "U-Shape",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/u-shape.gif"
			},
			{
				_id: 6,
				name: "Conference",
				attachment_type: "image",
				capacity: '100',
				src:"assets/images/confrence.gif"
			},
			{
				_id: 7,
				name: "Theater",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/lay_img3.png"
			}
		];

		/************************************
		* Get facilities
		*************************************/

		$scope.facilityList = [
			{
				label: "Wifi",
				attachment_type: "image",
				src:"assets/images/tv1_icon.png",
			},
			{
				label: "Tv",
				attachment_type: "image",
				src:"assets/images/tv_icon.png"
			},
			{
				label: "Room Service",
				attachment_type: "image",
				src:"assets/images/tv2_icon.png"
			},
			{
				label: "Music",
				attachment_type: "image",
				src:"assets/images/tv4_icon.png"
			},
			{
				label: "Parking",
				attachment_type: "icon",
				src:"local_parking"
			}
		];
		
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(infoDetail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);




"use strict";

app.controller('editMeetingManagementController', ['$scope','globalRequest','$mdDialog','toastService','roomDetail',
	function($scope,globalRequest,$mdDialog,toastService,roomDetail) {


		/***********************************************
		* Take editable item value in current scope
		***********************************************/		


		angular.forEach(roomDetail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.room_image)
		{
			$scope.room_image = '/images/hotel/'+$scope.hotel_id+'/rooms/'+$scope.room_image;
		} else {
			$scope.room_image = '/assets/images/metting_list.png';
		}

		/************************************
		* Get facilities
		*************************************/

		$scope.facilityList = [
			{
				label: "Wifi",
				attachment_type: "image",
				src:"assets/images/tv1_icon.png",
			},
			{
				label: "Tv",
				attachment_type: "image",
				src:"assets/images/tv_icon.png"
			},
			{
				label: "Room Service",
				attachment_type: "image",
				src:"assets/images/tv2_icon.png"
			},
			{
				label: "Music",
				attachment_type: "image",
				src:"assets/images/tv4_icon.png"
			},
			{
				label: "Parking",
				attachment_type: "icon",
				src:"local_parking"
			}
		];




		/************************************
		* Add room
		*************************************/		
		

		$scope.editRoom = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.UPDATE_MEETINGROOM,
			            method:"PUT",
			            data:{
			            	_id     	 :  $scope._id,
			            	name    	 :  $scope.name,
			            	dimension    :  $scope.dimension,
			            	capacity     :  $scope.capacity,
			            	facilities   :  $scope.facilities,
			            	room_number  :  $scope.room_number,
			            	cost 		 :  $scope.cost,		            
			            	status 	 	 :  $scope.status,		            	            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.roomImages && $scope.roomImages.length > 0)
		            {

		            	globalRequest.uploadFiles($scope.hotel_id,'rooms',$scope.roomImages).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_MEETINGROOM,
		                            method:"PUT",
		                            data:{  
		                              _id     	    :  $scope._id,
		                              room_image   	 	: fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            
			                            globalRequest.getRoomList();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$mdDialog.cancel();
			                        }

			                      });  
			                    }
			                });

				    } else {				    	
                        globalRequest.getRoomList();
                        popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
						$mdDialog.cancel();
				    }

			 	}  else {
			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		};



		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadRoomImage = function(files, errFiles) {
			$scope.roomImages = files;	

	    };
	
	}
]);

"use strict";

app.controller('meetingController', ['$scope','$rootScope','globalRequest','toastService',
	function($scope,$rootScope,globalRequest,toastService) {

		/************************************
		* Get rooms
		*************************************/
		 globalRequest.getRoomList('');


		/**********************************************
		* Filter room by availability on selected date
		**********************************************/
		$scope.$watch("search_from", function(newValue, oldValue) {
		 	
		 	if(newValue && newValue != oldValue)
		 	{
		 		if($scope.search_from && $scope.search_to)
		 		{
			 		var from = new Date($scope.search_from).getTime();
			 		var to   = new Date($scope.search_to).getTime();

			 		console.log({from:from,to:to});			 		
			 		globalRequest.getRoomList({from:from,to:to});
			 	}
		 	}
		});

		$scope.$watch("search_to", function(newValue, oldValue) {
		 	
		 	if(newValue && newValue != oldValue)
		 	{
		 		if($scope.search_from && $scope.search_to)
		 		{
		 			console.log({from:from,to:to});
			 		var from = new Date($scope.search_from).getTime();
			 		var to   = new Date($scope.search_to).getTime();			 		
			 		globalRequest.getRoomList({from:from,to:to});
			 	}
		 	}
		});

		/**********************************************************
	    * Item tags 
	    **********************************************************/

		var self = this;
	    self.readonly = false;	    
	    self.itemTag = [];
	    self.roomTagModel = angular.copy(self.itemTag);
	    self.editableitemTag = angular.copy(self.itemTag);
	    self.tags = [];	    
	    self.newVeg = function(chip) {
	      return {
	        name: chip,
	        type: 'unknown'
	      };
	    };

	    /************************************
		* Get facilities
		*************************************/

		$scope.facilityList = [
			{
				label: "Wifi",
				attachment_type: "image",
				src:"assets/images/tv1_icon.png",
			},
			{
				label: "Tv",
				attachment_type: "image",
				src:"assets/images/tv_icon.png"
			},
			{
				label: "Room Service",
				attachment_type: "image",
				src:"assets/images/tv2_icon.png"
			},
			{
				label: "Music",
				attachment_type: "image",
				src:"assets/images/tv4_icon.png"
			},
			{
				label: "Parking",
				attachment_type: "icon",
				src:"local_parking"
			}
		];


		/************************************
		* Get facilities
		*************************************/

		$scope.roomStyleList = [
			{
				_id: 1,
				name: "Auditorium",
				attachment_type: "image",
				capacity: '40max',
				src:"assets/images/audi.gif",
			},
			{
				_id: 2,
				name: "Banquet",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/Banquet.gif"
			},
			{
				_id: 3,
				name: "Hollow Square",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/hollow.gif"
			},
			{
				_id: 4,
				name: "Classroom",
				attachment_type: "image",
				capacity: '100max',
				src:"assets/images/class.gif"
			},
			{
				_id: 5,
				name: "U-Shape",
				attachment_type: "image",
				capacity: '50max',
				src:"assets/images/u-shape.gif"
			},
			{
				_id: 6,
				name: "Conference",
				attachment_type: "image",
				capacity: '100',
				src:"assets/images/confrence.gif"
			},
			{
				_id: 7,
				name: "Theater",
				attachment_type: "image",
				capacity: '10max',
				src:"assets/images/lay_img3.png"
			}
		];
		
		/*$scope.slider = {
		    minValue: 10,
		    maxValue: 90,
		    options: {
		        floor: 0,
		        ceil: 100,
		        step: 1
		    }
		};*/

		$scope.selectLayout = function(layoutID){

			$scope.selectedLayout = layoutID;
		};

		/**************************************
		* Appned staff member of click of icon
		**************************************/

		$scope.selectStaff = function(userName){
			
			if($rootScope.jot_members)
			{	
				var checkAlreadyExists = $rootScope.jot_members.match(/\@[a-z,0-9,_\/.-]+/gmi);	
				var match = -1;
				if(checkAlreadyExists)
				{
					match = checkAlreadyExists.indexOf('@'+userName);
				}


				if(match > -1)
				{
					return false;
				}
				$rootScope.jot_members = $rootScope.jot_members+' @'+userName+' ';
			} else {
				$rootScope.jot_members = '@'+userName+' ';
			}
			
		};


		/**************************************
		* Room booking
		**************************************/

		$scope.roomBooking = function(){
			var reserved = {from:new Date($scope.start_time).getTime(),to:new Date($scope.end_time).getTime()};
			var bookingRequest = {
				recipient_first_name     : $scope.recipient_first_name,
				recipient_last_name      : $scope.recipient_last_name,
				recipient_contact_number : $scope.recipient_contact_number,
				recipient_email     	 : $scope.recipient_email,
				recipient_address     	 : $scope.recipient_address,
				payment     			 : $scope.payment,
				reserved     			 : reserved,
				staff     			     : $rootScope.jot_members,
				tags     			     : $scope.ctrl.roomTagModel,
				description     		 : $rootScope.jot_description,
				room_layout_id     		 : $scope.selectedLayout,
				room_number     		 : $scope.ctrl.room_number,				
				user_id     		     : $rootScope.currentUser._id,				
				hotel_id     		     : $rootScope.activeHotelData._id,				
				booking_time     		 : new Date().getTime()					
			};


			var request={
				url:window.__API_PATH.ADD_BOOKING,
				method:"POST",
				data:bookingRequest
			};
					
			
			globalRequest.jotCRUD(request).then(function(response){				
				var popup;
				
			 	if(response.status == 1)
			 	{			 		
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);	

			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			});			
		};
	

		
	}
]);

"use strict";

app.controller('meetingManagementController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService) {
		var hotel = $rootScope.activeHotelData;

		/************************************
		* Get rooms
		*************************************/
		globalRequest.getRoomList('');

		/************************************
		* Get facilities
		*************************************/

		$scope.facilityList = [
			{
				label: "Wifi",
				attachment_type: "image",
				src:"assets/images/tv1_icon.png",
			},
			{
				label: "Tv",
				attachment_type: "image",
				src:"assets/images/tv_icon.png"
			},
			{
				label: "Room Service",
				attachment_type: "image",
				src:"assets/images/tv2_icon.png"
			},
			{
				label: "Music",
				attachment_type: "image",
				src:"assets/images/tv4_icon.png"
			},
			{
				label: "Parking",
				attachment_type: "icon",
				src:"local_parking"
			}
		];


		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.name = "";
			$scope.dimension = "";
			$scope.capacity = "";
			$scope.facilities = "";
			$scope.cost = "";
			$scope.status = "";
			$scope.roomImages = "";
		};


		/************************************
		* Add room
		*************************************/		
		

		$scope.addRoom = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_MEETINGROOM,
			            method:"POST",
			            data:{
			            	hotel_id     :  hotel._id,
			            	name    	 :  $scope.name,
			            	dimension    :  $scope.dimension,
			            	capacity     :  $scope.capacity,
			            	facilities   :  $scope.facilities,
			            	cost 		 :  $scope.cost,		            
			            	room_number 		 :  $scope.room_number,		            
			            	status 	 	 :  $scope.status,		            
			            	/*image 	     :  $scope.roomImages*/		            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		var roomID = response.result._id;
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.roomImages && $scope.roomImages.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'rooms',$scope.roomImages).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_MEETINGROOM,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : roomID,
		                              room_image   	 : fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            $scope.roomImages = '';
			                            globalRequest.getRoomList();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	$scope.roomImages = '';
                        globalRequest.getRoomList();
                        popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
						$scope.blank();
				    }

			 	}  else {
			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		};


		/*****************************************
		* Open edit room
		*****************************************/	

		$scope.openEditForm = function(detail){

			$mdDialog.show({
				controller: 'editMeetingManagementController',
				templateUrl: '/modules/meeting/views/edit_meeting_room_management.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{roomDetail:detail}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete room
		*****************************************/	

		$scope.removeRoom = function(detail,index){
			var request={
				url:window.__API_PATH.DELETE_MEETINGROOM,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$rootScope.meetingRoomList .splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};


		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadRoomImage = function(files, errFiles) {
			$scope.roomImages = files;	

	    };
	
	}
]);

"use strict";

app.filter('roomNamefilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchRoom  = scope.searchRoom;
			if(!searchRoom)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							

							if(searchRoom)
							{
								if (obj.name.match(new RegExp("(" + searchRoom + ")", "i"))) 
								{
							       return true;
							    }
							}

						});
		}
		return input;

	};

}).filter('roomSearchfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchRoom  = scope.search_capacity;
			if(!searchRoom)
			{
				return input;
			}


			input   =   input.filter(function( obj ) {							
							return obj.capacity >= searchRoom;
						});
		}
		return input;

	};

}).filter('filterBookingByDate',function(){
	return function(input,scope){

		if(input)
		{
			var fromDate, toDate, fromDateTime, toDateTime;

			fromDate        = scope.search_from_date;
			toDate          = scope.search_to_date;

			if(!fromDate & !toDate){
				return input;
			}


			if(fromDate){
				fromDateTime = 	new Date(fromDate).getTime();
			}

			if(toDate){
				toDateTime = 	new Date(toDate).getTime();
			}	


			input   =   input.filter(function( obj ) {
						var bookingFrom = obj.reserved.from;
						var bookingTo   = obj.reserved.to;

						if(fromDate && !toDate){							
							if(fromDateTime <= bookingFrom){
								return true;
							}
						} else if(!fromDate && toDate){

							if(toDateTime >= bookingTo){
								return true;
							}

						} else {
							if(fromDateTime <= bookingFrom && toDateTime >= bookingTo){	
								return true;
							}
						}
						//console.log(bookingFrom);
						});
		}
		
		return input;

	};

});


"use strict";

app.controller('footerController', ['$scope','$rootScope','$location','$interval',
	function($scope,$rootScope,$location,$interval) {
		//$rootScope.popup = true;
		

		$scope.callClosePopup = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
		};	

		$scope.redirectToHome = function(){
			$rootScope.popup = false;
			$rootScope.popupData = {text:'',action:''};
			$location.url($location.path());
			
		};

		/*****************************************
		* Loader icon
		*****************************************/

		var self = this;
	      self.activated = true;
	      self.determinateValue = 30;
	      $interval(function() {
	        self.determinateValue += 1;
	        if (self.determinateValue > 100) {
	          self.determinateValue = 30;
	        }

	      }, 10);
	}
]);



"use strict";

app.controller('frontHeaderController', ['$scope','$rootScope','$mdDialog','$location','anchorSmoothScroll','$timeout','$routeParams',
	function($scope,$rootScope,$mdDialog,$location,anchorSmoothScroll,$timeout,$routeParams) {	

		$scope.menus = window.__API_PATH.HEADER_MENU;

		if($routeParams.verify && $routeParams.verify == 'true')
		{

			$rootScope.popupData  = {
						text:  '<strong>Congratulations! </strong> <br>You have successfully verified the email address.<br> Please sign-in and start managing your hotels.',
						action: 'redirect'
			};
		
			 $timeout(function() {
			 	$rootScope.popup = true;
			 }, 300);
		}



		/******************************************
		* Scroll page to the section
		******************************************/
		$scope.activemenu = $scope.menus[0].label;
		$scope.gotoElement = function (eID){			
			if(eID.id && eID.id != "")
			{				
				$location.path('/');
				$timeout(function(){
					anchorSmoothScroll.scrollTo(eID.id);
				},200);    		
	
			}
			$timeout(function(){
				$scope.activemenu = eID.label;
			},200);
			      
	    };

	    

		$scope.openLoginForm = function(){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});
		};


		$scope.openRegisterFormpopup = function(){
			$mdDialog.show({
				templateUrl : "/modules/register/views/register.tpl.html",
       			controller  :  "registerController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true								
			}).then(function(answer) {}, function() {});
		};


	}
]);

"use strict";

app.controller('headerController', ['$scope','localStorageService','$rootScope','$mdDialog','globalRequest','$timeout','$location','$mdSidenav','socket',
	function($scope,localStorageService,$rootScope,$mdDialog,globalRequest,$timeout,$location,$mdSidenav,socket) {

		/*******************************************************
		* Sidebar
		*******************************************************/	
	
	    $rootScope.toggleSidebar      = buildToggler('sidebar');
	    $rootScope.toggleNotification = buildToggler('notification');

	    /*$scope.isOpenRight = function(){
	      return $mdSidenav('right').isOpen();
	    };*/

	   

	    function buildToggler(navID) {
	    	/*$rootScope.activeSidebar = !$rootScope.activeSidebar;*/
	      return function() {
	        $mdSidenav(navID)
	          .toggle()
	          .then();
	      };
	    }

	   


	    /*******************************************************
		* Get notificatoin
		*******************************************************/
		globalRequest.getNotification();
		

	    socket.on('notification',function(resp){
	    	
	    	$rootScope.message.push(resp.result);
		});

		socket.on('jot_create_notification',function(resp){
			console.log(resp.result);
	    	$rootScope.message.push(resp.result);
	    	$rootScope.message2 = resp.result;
		});
		
		/*******************************************************
		* Callback function to close jot circle on outside click
		*******************************************************/

		$scope.circleToggle = function(){			
				$scope.logocircle = false;
				$timeout(function() {				
				   $rootScope.$apply();
				});								
		};

		/*
		* Jot form tab list
		*/

		$rootScope.jotTypes        	= window.__API_PATH.JOT_TYPES;


	    if($rootScope.activeHotelData)
	    {

			/************************************************
			* Get list of Jot types selected by current user
			*************************************************/

			$scope.boards =  $rootScope.activeHotelData.jot_types;
		}

		/*
		*
		* Get hotels list
		*
		*/
		
		globalRequest.getHotels();		


		/*
		* Function
		*
		* Set hotel id in local storage and redirect to jot related to selected hotel
		*
		*/
		

		$scope.changeJotView = function(hotel){				
			globalRequest.getJotCount();
			localStorageService.set('hotel', hotel);
			$rootScope.activeHotelData = localStorageService.get('hotel');
			window.location.reload();
			
		};




		/**************************************
		* Open jot popup
		**************************************/

			$scope.quickTaskPopup = function(){
				$mdDialog.show({
					controller: 'jotPopupCtrl',
					templateUrl: '/modules/jot/views/jot-form.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,
					locals: {ActivateTab:{label:"Quick Jot",id:'quick',directory:'jot'}}
				}).then(function(answer) {}, function() {});

			};

		


		/**************************************
		* Open popup direct by jot type 
		**************************************/

		$rootScope.openFormByType = function(formType){
			$scope.circleToggle();
			$mdDialog.show({
				controller: 'jotPopupCtrl',
				templateUrl: '/modules/jot/views/jot-form.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,				
				locals: {ActivateTab:formType}
			}).then(function(answer) {}, function() {
				
			});
		};



		$scope.openLoginForm = function(detail){
			$mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{empDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});
		};


	}
]);
"use strict";

app.controller('notificationController', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {

		/*****************************************
		* Delete notification
		*****************************************/	

		$scope.removeNotification = function(aid,index){
			
			var request={
				url:window.__API_PATH.UPDATE_ALERT,
				method:"PUT",
				data:{_id:aid, user_id:$rootScope.currentUser._id}
			};
			
			globalRequest.jotCRUD(request).then(function(response){
				$rootScope.message.splice(index, 1);
			});

		};

	}
]);



"use strict";

app.controller('sidebarCntroller',['$scope','$location','$mdSidenav',function($scope,$location,$mdSidenav){

	/*$scope.closeSidebar = function(){			
			$rootScope.leftopen = false;
			$timeout(function() {				
			   $rootScope.$apply();
			});			
	};


	$rootScope.$on('handleSidebar', function() {
		$scope.closeSidebar();   	
	});*/

	$scope.getClass = function (path) {
	  return ($location.path() === path) ? 'active' : '';
	};
	

	$scope.closeSidebar = function(){
		$mdSidenav('sidebar').close();
	};
}]);
"use strict";

app.directive('circleToggle',['$document',function($document){

	return{
		link: function(scope,element){

			$document.on('click', function(event){
				
			});
		}
	
	};
}]);
"use strict";

app.directive('header',[ function(){
	return{
		templateUrl:'/modules/partials/header.html',
		link: function(scope,ele){}
	
	};
}]);




"use strict";

app.directive('outsideClickJotButton', function ($window) {    
    return {                 
        scope: {
            outsideCallback: '&outsideClickJotButton',
        },      
        link: function(scope, element, attrs) {

         var expressionHandler = scope.outsideCallback();               

          angular.element($window).on('click', function (event) {    
              var clickedContainerID = angular.element(event.target).attr('clickedContainer');
              if(clickedContainerID != 'jotButton')
              {
                  if (element[0].contains(event.target))
                  {} else {                 
                    expressionHandler();                    
                  }
              }          
            });
        }
    };
});

"use strict";

app.controller('editContactController', ['$scope','globalRequest','contactDetail','$mdDialog','toastService',
	function($scope,globalRequest,contactDetail,$mdDialog,toastService) {


		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/


		angular.forEach(contactDetail.detail,function (value,key) {
		    
		     if(key == 'tags')
			{
				$scope.ctrl.itemTagModel = value;
			} else {
				$scope[key] = value;
			}
		});


		/************************************
		* Edit employee
		*************************************/		
		

		$scope.editContactNumber = function(){	
			
			var request = {
		            url:window.__API_PATH.UPDATE_CONTACT,
		            method:"PUT",
		            data:{
		            	_id      	   :   $scope._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact 		:  $scope.contact
		            }
		          };

			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getContactList();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	} else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}

			 });

		};
		
		
	}
]);




"use strict";

app.controller('phoneDirController',['$scope','$rootScope','globalRequest','$mdDialog','toastService',function($scope, $rootScope, globalRequest,$mdDialog,toastService){
	var hotel = $rootScope.activeHotelData;
	/************************************
	* Blank all field before open form
	*************************************/	

	$scope.blank = function(){
		$scope.first_name = "";		
		$scope.last_name = "";
		$scope.email = "";
		$scope.contact = "";
		$scope.ctrl.itemTagModel = [];
	};

	/**********************************************************
    * Item tags 
    **********************************************************/

	var self = this;
    self.readonly = false;	    
    self.itemTag = [];
    self.itemTagModel = angular.copy(self.itemTag);
    self.editableitemTag = angular.copy(self.itemTag);
    self.tags = [];	    
    self.newVeg = function(chip) {
      return {
        name: chip,
        type: 'unknown'
      };
    };

	/************************************
	* Add contact number
	*************************************/		

	 globalRequest.getContactList();

	/************************************
	* Add contact number
	*************************************/		
	

	$scope.addContactNumber = function(){	

		var request = {
		            url:window.__API_PATH.ADD_CONTACT,
		            method:"POST",
		            data:{
		            	hotel_id      	:  hotel._id,
		            	first_name    	:  $scope.first_name,
		            	last_name       :  $scope.last_name,
		            	tags        	:  $scope.ctrl.itemTagModel,
		            	email        	:  $scope.email,
		            	contact         :  $scope.contact
		            }
		          };
		globalRequest.jotCRUD(request).then(function(response){	 	
			var popup;
		 	if(response.status == 1)
		 	{
		 		$scope.blank();
				$scope.ctrl.itemTagModel = [];
		 		if(!$scope.ContactList)
		 		{
		 			$scope.ContactList = [];
		 		}
		 		$scope.ContactList.push(response.result);

		 		popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
		 		
		 	} else {

		 		var errors = '<ul class="mdToast-error-list">';
				angular.forEach(response.errors,function(value,key){
					errors += '<li>'+value.message+'</li>';
				});
				errors += '</ul>';
				popup = {"message":errors,"class":""};
				toastService.errors(popup);
		 	}
		 });

	};


	/*****************************************
	* Open edit Contact
	*****************************************/	

	$scope.openEditContact = function(detail){
			$mdDialog.show({
				controller: 'editContactController',
				controllerAs: 'ctrl',
				templateUrl: '/modules/phone_directory/views/edit_contact.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{contactDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

	};


	/*****************************************
	* Favorite contact
	*****************************************/

	$scope.makeFavorite = function(detail){
		var fav = 'no';
		var message = '';
		if(detail.favorite == 'no')
		{
			fav =  'yes';
		}

		if(detail.favorite == 'yes')
		{
			fav =  'no';
		}
		var request={
			url:window.__API_PATH.UPDATE_CONTACT,
			method:"PUT",
			data:{_id:detail._id,favorite:fav}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	
			globalRequest.getContactList();
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);

		});

	};


	/*****************************************
	* Delete contact
	*****************************************/	

	$scope.removeContact = function(detail,index){

		var request={
			url:window.__API_PATH.DELETE_CONTACT,
			method:"DELETE",
			params:{_id:detail}
		};
		
		globalRequest.jotCRUD(request).then(function(response){	

			if(response.status)
			{
				$scope.ContactList.splice(index, 1);
			}			
			var popup = {"message":response.message,"class":response.class};
			toastService.alert(popup);
		});

	};
	
	
}]);
"use strict";

app.filter('contactfilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchContact        = scope.searchcontact;

			if(!searchContact){
				return input;
			}

			if(searchContact)
			{
				var removeSpaceFromString = searchContact.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							var fullName = obj.first_name+obj.last_name;
								if(fullName.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}							
								
						});
		}
		return input;

	};

});
"use strict";

app.controller('profileController',['$scope','$rootScope','globalRequest','localStorageService','toastService',function($scope,$rootScope,globalRequest,localStorageService,toastService){	

	$scope.first_name   = $rootScope.currentUser.first_name;
	$scope.last_name    = $rootScope.currentUser.last_name;
	$scope.email 		= $rootScope.currentUser.email;


	/******************************
	* Update information function
	*******************************/

	function userInfoUpdate(dataObj){
		var request={
				url:window.__API_PATH.UPDATE_PROFILE,
				method:"PUT",
				data:dataObj
			};
		globalRequest.jotCRUD(request).then(function(response){					 			 	
		 	if(response.status == 1)
		 	{	 		

				var popup = {"message":response.message,"class":"success"};
	            toastService.alert(popup);					
		 	}
		}); 
	}


	/***********************
	* Update profile image
	***********************/

	$scope.uploadprofileImage = function(files, errFiles) {
			globalRequest.uploadFiles(null,'profile_image',files).then(function(profileResponse){

				$rootScope.currentUser.profile_image = profileResponse.result[0].filename;
		 		localStorageService.set('user',$rootScope.currentUser);

					var imageObj = {
							_id  			: $rootScope.currentUser._id,
							profile_image   : profileResponse.result[0].filename
					};
					userInfoUpdate(imageObj);

				});
		};

		/*****************************
		* Update profile information
		*****************************/

		$scope.updateProfileInfo = function(){

			var infoObj = {
					_id  			: $rootScope.currentUser._id,
					first_name      : $scope.first_name,
					last_name       : $scope.last_name,
					email           : $scope.email
			};

			$rootScope.currentUser.first_name = $scope.first_name;
			$rootScope.currentUser.last_name  = $scope.last_name;
			$rootScope.currentUser.email      = $scope.email;
		 	localStorageService.set('user',$rootScope.currentUser);

			userInfoUpdate(infoObj);
		};


		/*****************************
		* Change password
		*****************************/

		$scope.changePassword = function(){
			if($scope.new_password != $scope.confirm_password)
			{
					var popup = {"message":"Password does not match the confirm password.","class":"Autherror"};
	            	toastService.alert(popup);
	            	return false;
			}
				var passwordRequest={
						url:window.__API_PATH.CHANGE_PASSWORD,
						method:"POST",
						data:{
							_id  	     : $rootScope.currentUser._id,         
							oldpassword  : $scope.old_password,
							newpassword  : $scope.new_password
						}
					};
				globalRequest.jotCRUD(passwordRequest).then(function(response){				 			 	
				 
				 	var popup = {"message":response.message,"class":response.class};
	            	toastService.alert(popup);	
	            	$scope.cancelChangePassword();
				});
		};

		/*****************************
		* Cancel password change
		*****************************/

		$scope.cancelChangePassword = function(){
				$scope.old_password = $scope.new_password = $scope.confirm_password = '';
		};
}]);
"use strict";

app.controller('registerController', ['$scope','$rootScope','registerFactory','$mdDialog','$timeout','globalRequest',
	function($scope,$rootScope,registerFactory,$mdDialog,$timeout,globalRequest) {
		$scope.profileImage = [];
		$scope.registerUser = function (obj) {
	        var dataObj = {
					
					first_name  	 : $scope.first_name,
					last_name   	 : $scope.last_name,
					email       	 : $scope.email,
					contact_number   : $scope.contact_number,
					password    	 : $scope.password,
					
			};

			var request={
					url:window.__API_PATH.REGISTER,
					method:"POST",
					data:dataObj
				};	   


			/********************************************
			*  Upload profile image if exists
			********************************************/


			if($scope.profileImage.length>0)
			{

				globalRequest.uploadFiles(null,'profile_image',$scope.profileImage).then(function(profileResponse){
					$scope.registerImageResult =  profileResponse;


					/********************************************
					*  Register user with profile image
					********************************************/

					request.data.profile_image = profileResponse.result[0].filename;

					registerFactory.register(request).then(function(response){
						$scope.registerResult   = response;
						if(response.status == 1)
						{					
							$rootScope.popupData = {text:response.message,action:'ok'};
							$timeout(function() {
							 	$mdDialog.cancel();
							 }, 200);
							 $timeout(function() {
							 	$rootScope.popup = true;
							 }, 300);	
						}							
					});

				});

			} else {

				/********************************************
				*  Register user without profile image
				********************************************/

				registerFactory.register(request).then(function(response){
					$scope.registerResult   = response;

					if(response.status == 1)
					{					
						$rootScope.popupData = {text:response.message,action:'ok'};
						$timeout(function() {
						 	$mdDialog.cancel();
						 }, 200);
						 $timeout(function() {
						 	$rootScope.popup = true;
						 }, 300);	
					 }							
				});
				
			}    
		};	

		/********************************************
		*  Keep uploaded file in temp scope
		********************************************/

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profileImage = files;
		};	

		/********************************************
		*  Open login form
		********************************************/

		$scope.openLoginForm = function (obj) {	
	           $mdDialog.show({
				templateUrl : "/modules/login/views/login.tpl.html",
       			controller: "loginController",
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true							
			}).then(function(answer) {}, function() {});    
		};	

		
	}
]);


'use strict';

app.factory('registerFactory', ['$http', function ($http) {
	return{		
	
		register: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},		
	};
}]);
"use strict";

app.controller('reportDetailController', ['$scope','$rootScope','globalRequest','$mdDialog','reportDetail',
	function($scope,$rootScope,globalRequest,$mdDialog,reportDetail) {
		
		console.log(reportDetail);
		/***********************************************
		* Pass edited employee value in current scope
		***********************************************/
		angular.forEach(reportDetail,function (value,key) {
		    $scope[key] = value;
		});	
	}
]);




"use strict";

app.controller('reportsController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		$scope.position_list = window.__API_PATH.POSITION;


		/************************************
		* Get reports list
		*************************************/			
		
		globalRequest.getReports();




		/************************************
		* Change order status
		*************************************/

		$scope.cancelOrder = function(id,$index){

			var request={
				url:window.__API_PATH.CANCEL_ORDER,
				method:"PUT",
				data:{_id:id}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getReports();
			});
		};


		/************************************
		* Change payment status
		*************************************/

		$scope.paymentStatus = function(report,status){

			var request={
				url:window.__API_PATH.PAYMENT_STATUS,
				method:"PUT",
				data:{_id:report._id,payment_status:status}
			};

			globalRequest.jotCRUD(request).then(function(response){				
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
				globalRequest.getReports();
			});
		};


		/*****************************************
		* Open reports detail
		*****************************************/	

		$scope.openReportDetail = function(detail){
			$mdDialog.show({
				controller: 'reportDetailController',
				templateUrl: '/modules/reports/views/reports_detail.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{reportDetail:detail}				
			}).then(function(answer) {}, function() {});

		};
	
		
	}
]);





"use strict";

app.filter('searchCustomerFilter',function(){
	return function(input,scope){

		if(input)
		{

			var searchCustomer        = scope.searchCustomer;
			if(!searchCustomer){
				return input;
			}

			if(searchCustomer)
			{
				var removeSpaceFromString = searchCustomer.replace(/\s/g,'');			
			}
			input   =   input.filter(function( obj ) {
							
								if(obj.user_info.match(new RegExp("(" + removeSpaceFromString + ")", "i")))
								{
									return true;
								}
						});
		}
		
		return input;

	};

});





app.filter('searchDateFilter',function(){
	return function(input,scope){
/*.getTime()*/
		if(input)
		{

			var search_date        = scope.search_date;
			if(!search_date){
				return input;
			}
			var date = new Date(search_date);
			var selectedDate =   date.getFullYear()+','+(parseInt(date.getMonth())+1) +','+ date.getDate();

			selectedDate = 	new Date(selectedDate).getTime();			
			input   =   input.filter(function( obj ) {

						var inputDate = new Date(obj.date);
						inputDate     =   inputDate.getFullYear()+','+(parseInt(inputDate.getMonth())+1) +','+ inputDate.getDate();

						inputDate = 	new Date(inputDate).getTime();

							if(inputDate == selectedDate)								
							{
								return true;
							}
						});
		}
		
		return input;

	};

});


"use strict";

app.controller('editCategoryController', ['$scope','globalRequest','$timeout','catDetail','$mdDialog','toastService',
	function($scope,globalRequest,$timeout,catDetail,$mdDialog,toastService) {
		
		/***********************************************
		* Take editable category value in current scope
		***********************************************/

		angular.forEach(catDetail.detail,function (value,key) {
		    $scope[key] = value;
		});		

		/************************************
		* Edit Item
		*************************************/			

		$scope.editInvtCat = function(){	
						
			var request =   {
				            	url    : window.__API_PATH.UPDATE_INVENTORY_CATEGORY,
				            	method : "PUT",
				            	data:{
				            		_id  		 			  :  $scope._id,
				            		inventory_category_name   :  $scope.inventory_category_name
				            	}
				          	};

			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	if(response.status ==1)
			 	{
			 		$mdDialog.cancel();
			 		globalRequest.getVendingCategory();
			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);

			 	}  else {
			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });
		};		
	}
]);
"use strict";

app.controller('editInventoryController', ['$scope','$rootScope','localStorageService','globalRequest','invDetail','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,invDetail,$mdDialog,toastService) {

		/***********************************************
		* Take editable item value in current scope
		***********************************************/		

		$scope.inventCatList = invDetail.prevScope.inventCatList;

		angular.forEach(invDetail.detail,function (value,key) {
		    $scope[key] = value;
		});
		
		if($scope.image)
		{
			$scope.image = '/images/hotel/'+$scope.hotel_id+'/inventory/'+$scope.image;
		} else {
			$scope.image = '/assets/images/vending_default.jpg';
		}

		/************************************
		* Edit Item
		*************************************/			

		$scope.editItem = function(){
			var popup;

			/****************************
            * Upload file if exists
            ****************************/

            if($scope.profile && $scope.profile.length > 0)
            {

            	globalRequest.uploadFiles($rootScope.activeHotelData._id,'inventory',$scope.profile).then(function(fileRasponse){
                    if(fileRasponse.status == 1)
                    {  

                        var status  = ($scope.status)?$scope.status:'inactive';			
						var updateRequest = {
						            url    : window.__API_PATH.UPDATE_ITEM,
						            method : "PUT",
						            data:{
						            	_id  		 :  $scope._id,
						            	item_name    :  $scope.item_name,
						            	category     :  $scope.category,
						            	price        :  $scope.price,
						            	sku_code     :  $scope.sku_code,
						            	quantity 	 :  $scope.quantity,		            
						            	image 	     :  fileRasponse.result[0].filename
						            }
						          };


                      /****************************
                      * Update files in lost found 
                      ****************************/

                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
                        if(updateResponse.status == 1)
                        {
                          $scope.files = '';
                          globalRequest.getVendingItems();
                          $mdDialog.cancel();
		                  popup = {"message":updateResponse.message,"class":"success"};
		                  toastService.alert(popup);
                        }

                      });  
                    }
                });

            } else {

            	/****************************
                * If no attachment uploaded
                ****************************/


            	var status  = ($scope.status)?$scope.status:'inactive';			
				var request = {
			            url    : window.__API_PATH.UPDATE_ITEM,
			            method : "PUT",
			            data:{
			            	_id  		 :  $scope._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity   
			            }
			          };

				globalRequest.jotCRUD(request).then(function(response){
				 	
				 	if(response.status ==1)
				 	{
				 		$mdDialog.cancel();
				 		globalRequest.getVendingItems();
				 		popup = {"message":response.message,"class":"success"};
		                toastService.alert(popup);

				 	}  else {

				 		var errors = '<ul class="mdToast-error-list">';
						angular.forEach(response.errors,function(value,key){
							errors += '<li>'+value.message+'</li>';
						});
						errors += '</ul>';
						popup = {"message":errors,"class":""};
						toastService.errors(popup);
				 	}

				 });
            }	
			
		};

		/*****************************************
		* Get file data in scope
		*****************************************/	
		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;		
	    };
		
	}
]);
"use strict";

app.controller('inventoryCatController', ['$scope','$rootScope','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,globalRequest,$mdDialog,toastService) {
		
		
		/************************************
		* Get Category list
		*************************************/			
		
		globalRequest.getVendingCategory();

		
		/************************************
		* Add category
		*************************************/		
		

		$scope.addInvtCat = function(){
		
			var request = {
			            url:window.__API_PATH.ADD_INVENTORY_CATEGORY,
			            method:"POST",
			            data:{
			            	hotel_id      			  :  $rootScope.activeHotelData._id,
			            	inventory_category_name   :  $scope.inventory_category_name
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
				var popup;
			 	if(response.status == 1)
			 	{
			 		$scope.inventory_category_name = '';
			 		if(!$scope.invtList)
			 		{
			 			$scope.invtList = [];
			 		}
			 		$scope.invtList.push(response.result);

			 		popup = {"message":response.message,"class":response.class};
					toastService.alert(popup);
			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}
			 });

		};

		/*****************************************
		* Open edit category
		*****************************************/	

		$scope.openEditForm = function(detail){
			
				$mdDialog.show({
					controller: 'editCategoryController',
					templateUrl: '/modules/vending_machine/views/edit_item_category.html',
					parent: angular.element(document.body),
					fullscreen: $scope.customFullscreen,
					clickOutsideToClose:true,	
					locals:{catDetail:{detail:detail,prevScope:$scope}}				
				}).then(function(answer) {}, function() {});

		};

		/*****************************************
		* Delete category
		*****************************************/	

		$scope.removeCat = function(detail,index){

			var request={
				url:window.__API_PATH.DELETE_INVENTORY_CATEGORY,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.invtList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};	
		
	}
]);
"use strict";

app.controller('inventoryController', ['$scope','$rootScope','localStorageService','globalRequest','$mdDialog','toastService',
	function($scope,$rootScope,localStorageService,globalRequest,$mdDialog,toastService) {
		
		var hotel = $rootScope.activeHotelData;

		/************************************************
		* Get list of Jot types selected by current user
		*************************************************/

		$scope.boards = hotel.jot_types;

		/************************************
		* Blank all field before open form
		*************************************/

		$scope.blank = function(){
			$scope.item_name = "";
			$scope.quantity = "";
			$scope.price = "";
			$scope.category = "";
			$scope.sku_code = "";
			$scope.profile_image = "";
			$scope.profile = "";
			$scope.profileProgress = -1;
		};


		/************************************
		* Get item list
		*************************************/	
		globalRequest.getVendingItems();


		/************************************
		* Get Category list
		*************************************/			
			
		var catRequest = {
		            url:window.__API_PATH.GET_INVENTORY_CATEGORY,
		            method:"GET",
		            params:{
		            	hotel_id    :  hotel._id		
		            }
		          };
		globalRequest.jotCRUD(catRequest).then(function(response){				
		 	$scope.inventCatList = response.result;
		});

		
		/************************************
		* Add item
		*************************************/		
		

		$scope.addItem = function(){
			var status  = ($scope.status)?$scope.status:'inactive';			
			var request = {
			            url:window.__API_PATH.ADD_ITEM,
			            method:"POST",
			            data:{
			            	hotel_id     :  hotel._id,
			            	item_name    :  $scope.item_name,
			            	category     :  $scope.category,
			            	price        :  $scope.price,
			            	sku_code     :  $scope.sku_code,
			            	quantity 	 :  $scope.quantity,		            
			            	image 	     :  $scope.profileimages		            
			            }
			          };
			globalRequest.jotCRUD(request).then(function(response){
			 	var popup;
			 	
			 	if(response.status == 1)
			 	{
			 		var itemID = response.result._id;
			 		
			 		/****************************
		            * Upload file if exists
		            ****************************/

		            if($scope.profile && $scope.profile.length > 0)
		            {

		            	globalRequest.uploadFiles(hotel._id,'inventory',$scope.profile).then(function(fileRasponse){
		                    if(fileRasponse.status == 1)
		                    {	                    	

		                        var updateRequest={
		                            url:window.__API_PATH.UPDATE_ITEM,
		                            method:"PUT",
		                            data:{  
		                              _id  		     : itemID,
		                              image   		 : fileRasponse.result[0].filename						  
		                            }
		                        };


			                      /****************************
			                      * Update files in lost found 
			                      ****************************/

			                      globalRequest.jotCRUD(updateRequest).then(function(updateResponse){
			                        if(updateResponse.status == 1)
			                        {
			                            $scope.profile = '';
			                            globalRequest.getVendingItems();
			                            popup = {"message":response.message,"class":"success"};
										toastService.alert(popup);
										$scope.blank();
			                        }

			                      });  
			                    }
			                });

				    } else {
				    	$scope.profile = '';
                        globalRequest.getVendingItems();
                        popup = {"message":response.message,"class":"success"};
						toastService.alert(popup);
						$scope.blank();
				    }

			 	}  else {

			 		var errors = '<ul class="mdToast-error-list">';
					angular.forEach(response.errors,function(value,key){
						errors += '<li>'+value.message+'</li>';
					});
					errors += '</ul>';
					popup = {"message":errors,"class":""};
					toastService.errors(popup);
			 	}

			 });

		};

		/*****************************************
		* Open edit employee
		*****************************************/	

		$scope.openEditForm = function(detail){
			
			$mdDialog.show({
				controller: 'editInventoryController',
				templateUrl: '/modules/vending_machine/views/edit_inventory.html',
				parent: angular.element(document.body),
				fullscreen: $scope.customFullscreen,
				clickOutsideToClose:true,	
				locals:{invDetail:{detail:detail,prevScope:$scope}}				
			}).then(function(answer) {}, function() {});

		};


		/*****************************************
		* Delete Item
		*****************************************/	

		$scope.removeItem = function(detail,index){
			var request={
				url:window.__API_PATH.DELETE_ITEM,
				method:"DELETE",
				params:{_id:detail}
			};
			
			globalRequest.jotCRUD(request).then(function(response){				
				$scope.inverntoryList.splice(index, 1);
				var popup = {"message":response.message,"class":response.class};
				toastService.alert(popup);
			});

		};

		/*****************************************
		* Profile image upload
		*****************************************/	

		$scope.uploadprofileImage = function(files, errFiles) {
			$scope.profile = files;	
	    };

	
		
	}
]);




"use strict";

app.controller('vendingMachineCtlr', ['$scope','$rootScope','globalRequest',
	function($scope,$rootScope,globalRequest) {
		
		/**********************************************************
	    * Get item category
	    **********************************************************/
	    globalRequest.getVendingCategory();


		/**********************************************************
	    * Get items list
	    **********************************************************/	

		var hotel = $rootScope.activeHotelData;
		function getItemList(){
			$scope.products = '';			
			var request={
	                url:window.__API_PATH.GET_ITEMS,
	                method:"GET",
	                params:{hotel_id:hotel._id}
	              };

	        globalRequest.jotCRUD(request).then(function(response){        	
	        	if(response.status == 1)
	            {
	              $scope.products = response.result;
	            }
	        });
		}
		getItemList();

        /**********************************************************
	    * Add item in cart
	    **********************************************************/

		$scope.cart = [];		
		$scope.addToCart = function(item,quantity){
			if(!isNaN(quantity) && quantity)
			{
				item.totalprice = parseInt(item.price) * parseInt(quantity);
			} else {
				item.totalprice = parseInt(item.price) * 0;
			}
			
			item.editquantity   = quantity;
			$scope.cart.push(item);
		};

		/**********************************************************
	    * Update price in cart
	    **********************************************************/

		$scope.changeItemPrice = function(item,quantity){	
			var cartItem  = $scope.cart;
			var updatedCart = [];
			angular.forEach(cartItem,function(key, value) {	
					if(key._id == item._id)
					{
						if(!isNaN(quantity) && quantity)
						{
							key.totalprice = parseInt(key.price) * parseInt(quantity);
						} else {
							key.totalprice = parseInt(key.price) * 0;
						}		
					}
					updatedCart.push(key);
			});
			$scope.cart = updatedCart;
		};


		/**********************************************************
	    * Remove item from cart
	    **********************************************************/

		$scope.removeItem = function(itemID) {
			var cartItem  = $scope.cart;
			cartItem      = cartItem.filter(function( obj ) {
									return obj._id != itemID;					  
							});
			$scope.cart = cartItem;
		};

		/**********************************************************
	    * Calculate total price in cart
	    **********************************************************/

		$scope.getTotal = function(){
			var cartItem  = $scope.cart;
			var total = 0;
			angular.forEach(cartItem,function(key, value) {	
					if(!isNaN(key.totalprice))
					{
						total += parseInt(key.totalprice);
					}				
					
			});
			return total;
		};



		/**********************************************************
	    * Check item is already selected or not
	    **********************************************************/

		$scope.checkSelected = function(itemID){
			var cartItem  = $scope.cart;
			var match = false;
			angular.forEach(cartItem,function(key, value) {	
				if(key._id == itemID)
				{
					match = true;
				}
			});			
			return match;
		};

		
        /**********************************************************
	    * Submit vending machine cart data
	    **********************************************************/

        $scope.submitVendingDetail = function() {
        	var payment,paymentMode,cardType,cardOwner,roomNumber,paymentData,cartTags;        	
        	var cartErrors    = {itemerror:"",tagerror:"",paymenterror:"",error:false};
        	payment           = $scope.payment_status;
        	paymentMode       = $scope.ctlr.paymentmode;
        	cardType 	      = $scope.ctlr.cardtype;
        	cardOwner 	   	  = $scope.ctlr.cardowner;
        	roomNumber 		  = $scope.ctlr.payment_room_number;
        	cartTags       	  = $scope.cart_tags;
        	$scope.cartErrors = '';

       		if($scope.cart.length == 0)
       		{
       			cartErrors.itemerror = 'Please select items';
       			cartErrors.error = true;
       		}


       		if(cartTags == '' || cartTags == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.tagerror = 'This field is required';
       		}

       		if(payment == '' || payment == undefined)
       		{
       			cartErrors.error = true;
       			cartErrors.paymenterror = 'Please select payment option';
       		}

       		if(cartErrors.error)
       		{
       			
       			$scope.cartErrors = cartErrors;
       			return false;
       		}
        	
        	paymentData = {	payment_status:payment,detail:''};

        	if(payment == 'paid')
        	{
        		if(paymentMode == 'card')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode,
	        			cardtype    : cardType,
	        			cardowner   : cardOwner	        			
	        		};
        		}
        		if(paymentMode == 'cash')
        		{
        			paymentData.detail = {
	        			paymentmode : paymentMode
	        		};

        		}
        	}
        	if(payment == 'unpaid')
        	{
        		paymentData.detail = {
	        			room_number : roomNumber
	        	};
        	}

        	paymentData.totalprice = $scope.getTotal();
        	paymentData.currency   = hotel.currency;


        	var request = {
				            url:window.__API_PATH.PURCHASE,
				            method:"POST",
				            data:{
				            	hotel_id  	: hotel._id,
				            	user_id	    : $rootScope.currentUser._id,			            	
				            	items     	: $scope.cart,
				            	payment   	: paymentData,
				            	user_info 	: cartTags,				      
	        					date      	: new Date().getTime()
				            }
				          };
			 globalRequest.jotCRUD(request).then(function(response){
			 	$scope.cartSaved = response;
			 	$scope.cart_tags = '';
			 	$scope.ctlr.paymentmode = '';
			 	$scope.ctlr.cardtype = '';
			 	$scope.ctlr.payment_room_number = '';
			 	$scope.payment_status = '';
			 	$scope.cart = [];
			 	getItemList();
			 });	          
        	
        };
	}
]);
"use strict";

app.filter('productfilter',function(){
	return function(input,scope){

		if(input)
		{
			var searchItemName  = scope.searchItemName;
			var itemCategory 	= scope.itemCategory;

			
			input   =   input.filter(function( obj ) {
					
							if(!searchItemName && !itemCategory)
							{
								return true;
							}

							if(searchItemName && !itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i"))) 
								{
							       return true;
							    }
							}

							if(!searchItemName && itemCategory)
							{
								if (obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}


							if(searchItemName && itemCategory)
							{
								if (obj.item_name.match(new RegExp("(" + searchItemName + ")", "i")) && obj.category.match(new RegExp("(" + itemCategory + ")", "i"))) 
								{
							       return true;
							    }
							}
					});
		}
		return input;

	};

});
"use Strict";

app.service('anchorSmoothScroll', function(){
    
    this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var j=startY; j>stopY; j-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;
        }

    };
    
});         
"use strict";
app.filter('bytes', function() {
	return function(bytes, precision) {
		if (isNaN(parseFloat(bytes)) || !isFinite(bytes)) return '-';
		if (typeof precision === 'undefined') precision = 1;
		var units = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'],
			number = Math.floor(Math.log(bytes) / Math.log(1024));
		return (bytes / Math.pow(1024, Math.floor(number))).toFixed(precision) +  ' ' + units[number];
	};
});

"use strict";

app.directive('closepopup', function($mdDialog) {
      return {                
          link: function(scope, element, attrs) {
              
              scope.closePopUpByDirective = function () {
                $mdDialog.cancel();
              };              
          }
      };
});

"use strict";

app.filter('currency',function($rootScope) {
	return function(input,scope){
		
		var currency;
		if($rootScope.activeHotelData.currency)
		{
			currency = $rootScope.activeHotelData.currency;			

		} else {

			currency = '$';
		}
		return currency+input;
	};
});
'use strict';

app.factory('cursorPosition', [function () {
	return{		
		
		GetCaretPosition: function(ctrl){
			var CaretPos = 0; 
            if (document.selection) {
                ctrl.focus();
                var Sel = document.selection.createRange();
                Sel.moveStart('character', -ctrl.value.length);
                CaretPos = Sel.text.length;
            }            
            else if (ctrl.selectionStart || ctrl.selectionStart == '0')
                CaretPos = ctrl.selectionStart;
            return (CaretPos);
		},	

		ReturnWord: function(text, caretPos){
			var index = text.indexOf(caretPos);
            var preText = text.substring(0, caretPos);
            
          

           /* if (preText.indexOf(" ") > 0) {*/
                var words = preText.split(" ");
                
                return words[words.length - 1]; //return last word
            /*}
            else {
                return preText;
            }*/			
		},

	};
}]);
"use strict";
app.filter('digits', function() {
return function(input) {
   if (input < 10) { 
          input = '0' + input;
      }
      return input;
    };
});
"use strict";

app.filter('groupBy', function(){
		return function(list, group_by) {

		var filtered = [];
		var prev_item = null;
		var group_changed = false;
		// this is a new field which is added to each item where we append "_CHANGED"
		// to indicate a field change in the list
		var new_field = group_by + '_CHANGED';

		// loop through each item in the list
		angular.forEach(list, function(item) {

			group_changed = false;

			// if not the first item
			if (prev_item !== null) {

				// check if the group by field changed
				if (prev_item[group_by] !== item[group_by]) {
					group_changed = true;
				}

			// otherwise we have the first item in the list which is new
			} else {
				group_changed = true;
			}

			// if the group changed, then add a new field to the item
			// to indicate this
			if (group_changed) {
				item[new_field] = true;
			} else {
				item[new_field] = false;
			}

			filtered.push(item);
			prev_item = item;

		});

		return filtered;
		};
	});
"use strict";

app.directive('ngConfirmDelete', ['$ngConfirm',
    function($ngConfirm){
        return {           
            link: function (scope, element, attr) {
                var title = attr.ngConfirmTitle || "Delete";
                var msg = attr.ngConfirmDelete || "Are you sure?";

                var clickAction = attr.confirmedClick;
    
                element.bind('click',function (event,id,index) {
                    event.stopPropagation();
                    $ngConfirm({
                        title: title,                      
                        content: attr.ngConfirmDelete,
                        scope: scope,                      
                        backgroundDismiss: true,
                        buttons: { 
                            ok: { 
                                text: "Yes",
                                btnClass: 'btn-primary themeColorClass',
                                keys: ['enter'],
                                action: function(scope){
                                     scope.$eval(clickAction);
                                }
                            },                        
                            cancel: function(scope){                                
                            }
                        },
                    });
                    
                });
            }
        };
}]);
"use strict";

app.filter('numberSuffix', function(){
  return function(number){
    if(isNaN(number) || number < 1){
      return number;
    } else {
      var lastDigit = number % 10;
      if(lastDigit === 1){
        return number + 'st';
      } else if(lastDigit === 2){
        return number + 'nd';
      } else if (lastDigit === 3){
        return number + 'rd';
      } else if (lastDigit > 3){
        return number + 'th';
      }
    }
  };
});
'use strict';

app.factory('replaceOccurence', ['$http', function ($http) {
	return{	
		replaceAll: function(string, search, replacement){
			
			replacement = " "+replacement+" ";
			
            return string.replace(new RegExp("(?:^|\\s)("+search+")(?=\\s|$)"),replacement);
		}
	};
}]);

"use strict";

app.factory('globalRequest',['$http','localStorageService','$rootScope','Upload','$timeout',function($http,localStorageService,$rootScope,Upload,$timeout){
	return{
		
		/**************************************************
		* Function for GET, POST, PUT, DELETE request
		**************************************************/

		jotCRUD: function(obj){
			return $http(obj).then(function(response){
				return response.data;
			}, function(response){
				return {
					errors: response.data.errors
				};
			});
		},


		uploadFiles: function(hotelID,directoryName,files){
		
			var fileArgs;

			if(hotelID)
			{
				fileArgs = {	                    
								hotel_id     : hotelID,
								folder_name  : directoryName,	                    
								file         : files
							};
			} else {
				fileArgs = {	
								folder_name  : directoryName,	                    
								file         : files
							};
			}		


			if (files) {				
	          return  Upload.upload({
	                url: window.__API_PATH.UPLOAD_FILE,
	                type:'post',
	                arrayKey: '',
	                data: fileArgs
	            }).then(function (response) {
	                return $timeout(function () {           
	                   return response.data;	                   
	                });
	            });
	        }
		},


		getHotelStatus:function(hotelID){
			$rootScope.hotelStatus = '';
			var hotelstatusrequest = {
					url:window.__API_PATH.GET_HOTEL_STATUS,
					method:"GET",
					params: { 
								"hotel_id":hotelID						
							}
				};

			
			return $http(hotelstatusrequest).then(function(response){	
				return response.data.result;

			}, function(response){
				$rootScope.hotelStatus = response.data.errors;				
			});
		},

		getHotels:function(){
			$rootScope.hotels = '';
			var userData   	  = localStorageService.get('user');
			var paramsData 	  = { 
						"user_id":userData._id						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTELS,
				method:"GET",
				params:paramsData
			};
		
			return $http(hotellistrequest).then(function(response){	
				$rootScope.hotels = response.data.result;
			}, function(response){
				$rootScope.hotels = response.data.errors;				
			});
		},


		getHotelDetail:function(hotelID){						
			var paramsData 	  = { 
						"hotel_id":hotelID						
				};
			var hotellistrequest={
				url:window.__API_PATH.GET_HOTEL_DETAIL,
				method:"GET",
				params:paramsData
			};

			return $http(hotellistrequest).then(function(response){	
				return response.data;				
			});
		},

		getStaff:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.STAFF_SUGGESTION,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.staffList = response.data.result;
			}, function(response){
				$rootScope.staffList = response.data.errors;				
			});
		},


		getPositionList:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_POSITION,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.potisionList = response.data.result;			

			}, function(response){
				$rootScope.potisionList = response.data.errors;				
			});
		},


		getDepartments:function(){
			var hotel   = localStorageService.get('hotel');
			var request = {
						url:window.__API_PATH.GET_DEPARTMENTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.departmentList = response.data.result;
			}, function(response){
				$rootScope.departmentList = response.data.errors;				
			});
		},

		getShiftTime:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_HOTELSHIFTS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.shiftList = response.data.result;
			}, function(response){
				$rootScope.shiftList = response.data.errors;				
			});
		},

		getVendingItems:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_ITEMS,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.inverntoryList = response.data.result;
			}, function(response){
				$rootScope.inverntoryList = response.data.errors;				
			});
		},

		getReports:function(){
			$rootScope.reportsList = '';
			var reportsRequest = {
					url:window.__API_PATH.GET_REPORTS,
					method:"GET",
					params: { 
								"hotel_id" : $rootScope.activeHotelData._id,
								"user_id"  : $rootScope.currentUser._id,						
							}
				};			
			return $http(reportsRequest).then(function(response){	
				$rootScope.reportsList =  response.data.result;

			}, function(response){
				$rootScope.reportsList = response.data.errors;				
			});
		},

		getBookingReports:function(){
			$rootScope.bookingReportsList = '';
			var bookReportsRequest = {
					url:window.__API_PATH.GET_BOOK_REPORTS,
					method:"GET",
					params: { 
								"hotel_id" : $rootScope.activeHotelData._id,					
							}
				};			
			return $http(bookReportsRequest).then(function(response){	
				$rootScope.bookingReportsList =  response.data.result;

			}, function(response){
				$rootScope.bookingReportsList = response.data.errors;				
			});
		},

		getVendingCategory:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_INVENTORY_CATEGORY,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.invtList = response.data.result;
			}, function(response){
				$rootScope.invtList = response.data.errors;				
			});
		},

		getFoundList:function(){
				var hotel   = localStorageService.get('hotel');
				var request = {
						url:window.__API_PATH.GET_LOST_FOUND,
						method:"GET",
						params:{hotel_id: hotel._id}
				};

			return $http(request).then(function(response){
				$rootScope.LstFndList = response.data.result;
			}, function(response){
				$rootScope.LstFndList = response.data.errors;				
			});
		},

		getContactList:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_CONTACTS,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.ContactList = response.data.result;
			}, function(response){
				$rootScope.ContactList = response.data.errors;				
			});
		},


		getDocument:function(){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_DOCUMENT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.documentList = response.data.result;
			}, function(response){
				$rootScope.documentList = response.data.errors;				
			});
		},



		getJotCount:function(){
				var hotel   = localStorageService.get('hotel');
				var user   = localStorageService.get('user');

				var request = {
			            url:window.__API_PATH.JOT_COUNT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	contact_number  :  user.contact_number
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotCount = response.data.result;			

			}, function(response){
				$rootScope.JotCount = response.data.errors;				
			});
		},


		getRoomList:function(range){
				var hotel   = localStorageService.get('hotel');

				var request = {
			            url:window.__API_PATH.GET_MEETINGROOMS,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	range           :  range
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.meetingRoomList = response.data.result;			

			}, function(response){
				$rootScope.meetingRoomList = response.data.errors;				
			});
		},

		getJotList:function(JotType){
				var hotel   	 = localStorageService.get('hotel');
				var userDetail   = localStorageService.get('user');
				
				var request = {
			            url:window.__API_PATH.GET_JOT,
			            method:"GET",
			            params:{
			            	hotel_id      	:  hotel._id,
			            	jot_type      	:  JotType,			            	
			            	contact_number  :  userDetail.contact_number
			            }
			          };

			return $http(request).then(function(response){
				$rootScope.JotListData = response.data.result;			

			}, function(response){
				$rootScope.JotListData = response.data.errors;				
			});
		},


		getAlertList:function(){
			var userDetail   = localStorageService.get('user');
			var getAlertRequest = {
			            url:window.__API_PATH.GET_ALERTS,
			            method:"GET"			            			            
			          };
			return $http(getAlertRequest).then(function(response){				
				$rootScope.alertList = response.data.result;


			}, function(response){
				$rootScope.alertList = response.data.errors;				
			});
		},
		getNotification:function(){
			var userDetail   = localStorageService.get('user');
			var getAlertRequest = {
			            url:window.__API_PATH.GET_NOTIFICATION,
			            method:"GET",
			            params:{
			            	user_id      	:  userDetail._id
			            }			            
			          };
			return $http(getAlertRequest).then(function(response){				
				$rootScope.message	 = response.data.result;				


			}, function(response){
				$rootScope.alertList = response.data.errors;				
			});
		},

		
	};

}]);
"use strict";

app.directive('slideable', function () {
    
    return {
        restrict:'C',
        compile: function (element, attr) {
            // wrap tag
            var contents = element.html();
            element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

            return function postLink(scope, element, attrs) {
                // default properties
                attrs.duration = (!attrs.duration) ? '0.7s' : attrs.duration;
                attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                element.css({
                    'overflow-x': 'hidden',
                    'overflow-y': 'auto',
                    'height': '0px',
                    'transitionProperty': 'height',
                    'transitionDuration': attrs.duration,
                    'transitionTimingFunction': attrs.easing
                });
            };
        }
    };
})
.directive('slideToggle', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            
            var target = document.querySelector(attrs.slideToggle);
          
            attrs.expanded = false;
            var y;
            element.bind('click', function() {
                var content = target.querySelector('.slideable_content');
                if(!attrs.expanded) {
                    content.style.border = '1px solid rgba(0,0,0,0)';
                    y = content.clientHeight+50;
                    content.style.border = 0;
                    target.style.height = y + 'px';
                } else {
                    target.style.height = '0px';
                }
                attrs.expanded = !attrs.expanded;
            });

            scope.$watch('files',function(newdata,olddata) {
                $timeout(function() {
                    if(newdata)
                    {
                        var fileContentHeight = target.querySelector('.uploadimage_list');
                        fileContentHeight = fileContentHeight.clientHeight+50;                    
                        var totalHeight = fileContentHeight+y;
                        target.style.height = totalHeight+ 'px';
                    }
            },500);
                
           
            } );
        }
    };
});




"use strict";

app.factory('socket', function($rootScope) {

    //var socket = io.connect('localhost:5040');

    var socket =io.connect('http://localhost:8020');
    return {
        on: function(eventName, callback) {
            socket.on(eventName, function() {
                var args = arguments;
                //console.log(args);
                $rootScope.$apply(function() {
                    callback.apply(socket, args);
                });
            });
        },
        emit: function(eventName, data, callback) {            
            socket.emit(eventName, data, function() {
                var args = arguments;
                $rootScope.$apply(function() {
                    if (callback) {
                        callback.apply(socket, args);
                    }
                });
            });
        }
    };
});
"use strict";
app.filter('timeConvertorfilter', function() {
	return function(input, scope) {
		if(input)
		{
			var timeVal = '';
			input = parseInt(input);
			if(input <= 12)
			{
				timeVal = input+" AM";
			} else {
				input = input-12;				
				timeVal = input+" PM";
			}

			return timeVal;
		}

	};
});


app.filter('getmeridiem', function() {
	return function(input, scope) {


		if(input)
		{
			var timeVal,hour,min;

			var timeArray = input.split(':');

			if(timeArray[0] != '')
			{

				if(timeArray[0] == -1)
				{

					hour 	=   timeArray[0];
					min     =   timeArray[1];
					timeVal = "Untill Finish";

				} else {


					if(timeArray[0] <= 12)
					{
						hour 	=  timeArray[0];
						min     =   timeArray[1];
						timeVal = hour+":"+min+" AM";
					} else {
						hour 	=  timeArray[0]-12;
						min     =   timeArray[1];				
						timeVal = hour+":"+min+" PM";
					}
				}	
			}

			return timeVal;
		}

	};
});

'use strict';

app.factory('toastService', ['$mdToast','$timeout','$rootScope', function ($mdToast, $timeout,$rootScope) {
	return{
		alert: function(opt){
			$mdToast.hide();	
			$timeout(function(){
				var toast = $mdToast.simple()
				.textContent(opt.message)
				.position('bottom right')
				.toastClass(opt.class)
				.action('x')
				.hideDelay(3000);


				$mdToast.show(toast).then(function(response) {
				    if ( response == 'ok' ) {
				    	$mdToast.hide();
				    }
				});
			},1000);
		},



		errors: function(opt){
					$rootScope.closeToast = function () {
			            $mdToast.hide();
			        };

					$mdToast.hide();	
					$timeout(function(){
					var errorToast = {
						  	  hideDelay   : 5000,
					          position    : 'bottom right',
					          action      : true,				         
					          template : '<md-toast md-theme="default" class="ng-scope md-toast-error '+opt.class+'" _md md-bottom md-right md-default-theme" style=""><div class="md-toast-content"><span class="md-toast-text ng-binding" role="alert" aria-relevant="all" aria-atomic="true">'+opt.message+'</span> <button class="md-action md-button ng-scope md-default-theme md-ink-ripple" type="button" ng-click="$root.closeToast()" ng-class="highlightClasses">      x    </button></div></md-toast>'
					};
				$mdToast.show(errorToast);
			},1000);
		}
	};
}]);