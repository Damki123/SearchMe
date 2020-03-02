// create empty array to fill

const arr = [];

// create constructor

function Product(id,name,category,description,norm,isCustomisable,eta,ava,retail) {
    this.id = id,
    this.name = name,
    this.category = category,
    this.description = description,
    this.norm = norm,
    this.isCustomisable = isCustomisable,
    this.eta = eta,
    this.ava = ava,
    this.retail = retail      
}

// create method

function pushProduct(id,name,category,description,norm,isCustomisable,eta,ava,retail){
    const p = new Product(id,name,category,description,norm,isCustomisable,eta,ava,retail);
    arr.push(p)
}

// add products

pushProduct("61","Osłona kuli haka","Akcesoria","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("60","Gniazdo ergo 7-pin","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("59","Gniazdo ergo 7-pin typu s","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("58","Gniazdo ergo 13-pin","kable ładowania","dsadsadsadsaor semet3","110",false,"48h",true,true);
pushProduct("57","wtyczka ergo 7-pin","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("56","wtyczka ergo 13-pin 122mm","12-volt","lorem sdahsdbasdsa","110",true,"12h",false,false);
pushProduct("55","wtyczka ergo 13-pin 93mm","Akcesoria","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("54","wtyczka ergo 7-pin typu s","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("53","adapter wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("52","adapter zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("51","adapter zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("50","kabel miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("49","kabel rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("48","kabel wolności","kable ładowania","dsadsadsadsaor semet3","11445",false,"48h",true,true);
pushProduct("47","kabel zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("46","kabel zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("45","przewód miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("44","przewód rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("43","przewód wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("42","przewód zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("41","przewód zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("40","złącze miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("39","złącze rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("38","złącze wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("37","złącze zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("36","złącze zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("35","zaślepka miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("34","zaślepka rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("33","zaślepka wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("32","zaślepka zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("31","zaślepka zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("30","zapadka miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("29","zapadka rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("28","zapadka wolności","kable ładowania","dsadsadsadsaor semet3","11445",false,"48h",true,true);
pushProduct("27","zapadka zaawiści","24-volt","lorem ipsum dolor semet4","110",true,"24h",true,true);
pushProduct("26","zapadka zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("25","moduł miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11445",false,"24h",true,true);
pushProduct("24","moduł rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("23","moduł wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("22","moduł zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("21","moduł zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("20","instalacja miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("19","instalacja rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("18","instalacja wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("17","instalacja zaawiści","24-volt","lorem ipsum dolor semet4","11445",true,"24h",true,true);
pushProduct("16","instalacja zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("15","wtyczka miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("14","wtyczka rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("13","wtyczka wolności","kable ładowania","dsadsadsadsaor semet3","110",false,"48h",true,true);
pushProduct("12","wtyczka zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("11","wtyczka zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);
pushProduct("10","wtyczkogniazdo miłości","24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("9","wtyczkogniazdo rozkoszy","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("8","wtyczkogniazdo wolności","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("7","wtyczkogniazdo zaawiści","24-volt","lorem ipsum dolor semet4","11446",true,"24h",true,true);
pushProduct("6","wtyczkogniazdo zaqwiłości","12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false); 
pushProduct("5","adapter kablowy 13/7","złącza elektyczne 24-volt","loremasdsdasdassd asdsa sddolor semet","11446",false,"24h",true,true);
pushProduct("4","adapter kablowy spiralny","instalacje i moduły kuli haka","lorem ipsum dolor semet2","11446",true,"24h",true,true);
pushProduct("3","adapter kablowy spirany","kable ładowania","dsadsadsadsaor semet3","11446",false,"48h",true,true);
pushProduct("2","adapter kablowy typu S","złącza elektyczne 24-volt","lorem ipsum dolor semet4","110",true,"24h",true,true);
pushProduct("1","adapter kablowy niklowany","złącza elektyczne 12-volt","lorem sdahsdbasdsa","11446",true,"12h",false,false);




