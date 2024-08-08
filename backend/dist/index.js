import {createRequire} from "node:module";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __require = createRequire(import.meta.url);

// node_modules/@gaignoux/currency/dist/index.js
var require_dist = __commonJS((exports) => {
  var e;
  var r;
  var o;
  var n;
  var c;
  Object.defineProperty(exports, "__esModule", { value: true }), exports.CurrencySymbol = undefined, (e = exports.CurrencySymbol || (exports.CurrencySymbol = {})).AED = "\u062F.\u0625", e.AFN = "\u060B", e.ALL = "L", e.AMD = "\u058F", e.ANG = "\u0192", e.AOA = "Kz", e.ARS = "$", e.AUD = "$", e.AWG = "\u0192", e.AZN = "\u20BC", e.BAM = "KM", e.BBD = "$", e.BDT = "\u09F3", e.BGN = "\u043B\u0432", e.BHD = "\u062F.\u0628", e.BIF = "FBu", e.BMD = "$", e.BND = "$", e.BOB = "Bs.", e.BOV = "BOV", e.BRL = "R$", e.BSD = "$", e.BTN = "Nu.", e.BWP = "P", e.BYR = "Br", e.BZD = "BZ$", e.CAD = "$", e.CDF = "FC", e.CHE = "CHE", e.CHF = "CHF", e.CHW = "CHW", e.CLF = "CLF", e.CLP = "$", e.CNY = "\xA5", e.COP = "$", e.COU = "COU", e.CRC = "\u20A1", e.CUC = "$", e.CUP = "$", e.CVE = "$", e.CZK = "K\u010D", e.DJF = "Fdj", e.DKK = "kr", e.DOP = "RD$", e.DZD = "\u062F\u062C", e.EGP = "\xA3", e.ERN = "Nfk", e.ETB = "Br", e.EUR = "\u20AC", e.FJD = "$", e.FKP = "\xA3", e.GBP = "\xA3", e.GEL = "\u20BE", e.GHS = "\u20B5", e.GIP = "\xA3", e.GMD = "D", e.GNF = "FG", e.GTQ = "Q", e.GYD = "$", e.HKD = "$", e.HNL = "L", e.HRK = "kn", e.HTG = "G", e.HUF = "Ft", e.IDR = "Rp", e.ILS = "\u20AA", e.INR = "\u20B9", e.IQD = "\u062F.\u0639", e.IRR = "\uFDFC", e.ISK = "kr", e.JMD = "$", e.JOD = "\u062F.\u0627", e.JPY = "\xA5", e.KES = "Ksh", e.KGS = "\u0441\u043E\u043C", e.KHR = "\u17DB", e.KMF = "CF", e.KPW = "\u20A9", e.KRW = "\u20A9", e.KWD = "\u062F.\u0643", e.KYD = "$", e.KZT = "\u20B8", e.LAK = "\u20AD", e.LBP = "\xA3", e.LKR = "\u0DBB\u0DD4", e.LRD = "$", e.LSL = "M", e.LTL = "Lt", e.LVL = "Ls", e.LYD = "\u0644.\u062F", e.MAD = "MAD", e.MDL = "L", e.MGA = "Ar", e.MKD = "\u0434\u0435\u043D", e.MMK = "K", e.MNT = "\u20AE", e.MOP = "MOP$", e.MRO = "UM", e.MUR = "\u20A8", e.MVR = "\u0783.", e.MWK = "MK", e.MXN = "$", e.MXV = "MXV", e.MYR = "RM", e.MZN = "MT", e.NAD = "$", e.NGN = "\u20A6", e.NIO = "C$", e.NOK = "kr", e.NPR = "\u20A8", e.NZD = "$", e.OMR = "\u0631.\u0639.", e.PAB = "B/.", e.PEN = "S/", e.PGK = "K", e.PHP = "\u20B1", e.PKR = "\u20A8", e.PLN = "z\u0142", e.PYG = "\u20B2", e.QAR = "\u0631.\u0642", e.RON = "lei", e.RSD = "\u0434\u0438\u043D.", e.RUB = "\u20BD", e.RWF = "FRw", e.SAR = "\u0631.\u0633", e.SBD = "$", e.SCR = "\u20A8", e.SDG = "\u062C.\u0633.", e.SEK = "kr", e.SGD = "$", e.SHP = "\xA3", e.SLL = "Le", e.SOS = "S", e.SRD = "$", e.SSP = "\xA3", e.STD = "Db", e.SYP = "\xA3", e.SZL = "E", e.THB = "\u0E3F", e.TJS = "\u0405\u041C", e.TMT = "T", e.TND = "\u062F.\u062A", e.TOP = "T$", e.TRY = "\u20BA", e.TTD = "TT$", e.TWD = "NT$", e.TZS = "TSh", e.UAH = "\u20B4", e.UGX = "USh", e.USD = "$", e.USN = "USN", e.USS = "USS", e.UYI = "UYI", e.UYU = "$U", e.UZS = "\u043B\u0432", e.VEF = "Bs.", e.VND = "\u20AB", e.VUV = "VT", e.WST = "WS$", e.XAF = "FCFA", e.XAG = "XAG", e.XAU = "XAU", e.XBA = "XBA", e.XBB = "XBB", e.XBC = "XBC", e.XBD = "XBD", e.XCD = "$", e.XDR = "XDR", e.XFU = "XFU", e.XOF = "CFA", e.XPD = "XPD", e.XPF = "\u20A3", e.XPT = "XPT", e.XTS = "XTS", e.XXX = "XXX", e.YER = "\uFDFC", e.ZAR = "R", e.ZMW = "ZK", exports.CurrencyName = undefined, (r = exports.CurrencyName || (exports.CurrencyName = {})).AED = "United Arab Emirates Dirham", r.AFN = "Afghan Afghani", r.ALL = "Albanian Lek", r.AMD = "Armenian Dram", r.ANG = "Netherlands Antillean Guilder", r.AOA = "Angolan Kwanza", r.ARS = "Argentine Peso", r.AUD = "Australian Dollar", r.AWG = "Aruban Florin", r.AZN = "Azerbaijani Manat", r.BAM = "Bosnia-Herzegovina Convertible Mark", r.BBD = "Barbadian Dollar", r.BDT = "Bangladeshi Taka", r.BGN = "Bulgarian Lev", r.BHD = "Bahraini Dinar", r.BIF = "Burundian Franc", r.BMD = "Bermudian Dollar", r.BND = "Brunei Dollar", r.BOB = "Bolivian Boliviano", r.BOV = "Bolivian Mvdol", r.BRL = "Brazilian Real", r.BSD = "Bahamian Dollar", r.BTN = "Bhutanese Ngultrum", r.BWP = "Botswana Pula", r.BYR = "Belarusian Ruble", r.BZD = "Belize Dollar", r.CAD = "Canadian Dollar", r.CDF = "Congolese Franc", r.CHE = "WIR Euro", r.CHF = "Swiss Franc", r.CHW = "WIR Franc", r.CLF = "Chilean Unidad de Fomento", r.CLP = "Chilean Peso", r.CNY = "Chinese Yuan", r.COP = "Colombian Peso", r.COU = "Colombian Real Value Unit", r.CRC = "Costa Rican Col\xF3n", r.CUC = "Cuban Convertible Peso", r.CUP = "Cuban Peso", r.CVE = "Cape Verdean Escudo", r.CZK = "Czech Koruna", r.DJF = "Djiboutian Franc", r.DKK = "Danish Krone", r.DOP = "Dominican Peso", r.DZD = "Algerian Dinar", r.EGP = "Egyptian Pound", r.ERN = "Eritrean Nakfa", r.ETB = "Ethiopian Birr", r.EUR = "Euro", r.FJD = "Fijian Dollar", r.FKP = "Falkland Islands Pound", r.GBP = "British Pound Sterling", r.GEL = "Georgian Lari", r.GHS = "Ghanaian Cedi", r.GIP = "Gibraltar Pound", r.GMD = "Gambian Dalasi", r.GNF = "Guinean Franc", r.GTQ = "Guatemalan Quetzal", r.GYD = "Guyanaese Dollar", r.HKD = "Hong Kong Dollar", r.HNL = "Honduran Lempira", r.HRK = "Croatian Kuna", r.HTG = "Haitian Gourde", r.HUF = "Hungarian Forint", r.IDR = "Indonesian Rupiah", r.ILS = "Israeli New Shekel", r.INR = "Indian Rupee", r.IQD = "Iraqi Dinar", r.IRR = "Iranian Rial", r.ISK = "Icelandic Kr\xF3na", r.JMD = "Jamaican Dollar", r.JOD = "Jordanian Dinar", r.JPY = "Japanese Yen", r.KES = "Kenyan Shilling", r.KGS = "Kyrgystani Som", r.KHR = "Cambodian Riel", r.KMF = "Comorian Franc", r.KPW = "North Korean Won", r.KRW = "South Korean Won", r.KWD = "Kuwaiti Dinar", r.KYD = "Cayman Islands Dollar", r.KZT = "Kazakhstani Tenge", r.LAK = "Laotian Kip", r.LBP = "Lebanese Pound", r.LKR = "Sri Lankan Rupee", r.LRD = "Liberian Dollar", r.LSL = "Lesotho Loti", r.LTL = "Lithuanian Litas", r.LVL = "Latvian Lats", r.LYD = "Libyan Dinar", r.MAD = "Moroccan Dirham", r.MDL = "Moldovan Leu", r.MGA = "Malagasy Ariary", r.MKD = "Macedonian Denar", r.MMK = "Myanma Kyat", r.MNT = "Mongolian Tugrik", r.MOP = "Macanese Pataca", r.MRO = "Mauritanian Ouguiya", r.MUR = "Mauritian Rupee", r.MVR = "Maldivian Rufiyaa", r.MWK = "Malawian Kwacha", r.MXN = "Mexican Peso", r.MXV = "Mexican Unidad de Inversion (UDI)", r.MYR = "Malaysian Ringgit", r.MZN = "Mozambican Metical", r.NAD = "Namibian Dollar", r.NGN = "Nigerian Naira", r.NIO = "Nicaraguan C\xF3rdoba", r.NOK = "Norwegian Krone", r.NPR = "Nepalese Rupee", r.NZD = "New Zealand Dollar", r.OMR = "Omani Rial", r.PAB = "Panamanian Balboa", r.PEN = "Peruvian Nuevo Sol", r.PGK = "Papua New Guinean Kina", r.PHP = "Philippine Peso", r.PKR = "Pakistani Rupee", r.PLN = "Polish Zloty", r.PYG = "Paraguayan Guarani", r.QAR = "Qatari Rial", r.RON = "Romanian Leu", r.RSD = "Serbian Dinar", r.RUB = "Russian Ruble", r.RWF = "Rwandan Franc", r.SAR = "Saudi Riyal", r.SBD = "Solomon Islands Dollar", r.SCR = "Seychellois Rupee", r.SDG = "Sudanese Pound", r.SEK = "Swedish Krona", r.SGD = "Singapore Dollar", r.SHP = "Saint Helena Pound", r.SLL = "Sierra Leonean Leone", r.SOS = "Somali Shilling", r.SRD = "Surinamese Dollar", r.SSP = "South Sudanese Pound", r.STD = "S\xE3o Tom\xE9 and Pr\xEDncipe Dobra", r.SYP = "Syrian Pound", r.SZL = "Swazi Lilangeni", r.THB = "Thai Baht", r.TJS = "Tajikistani Somoni", r.TMT = "Turkmenistani Manat", r.TND = "Tunisian Dinar", r.TOP = "Tongan Pa\u02BBanga", r.TRY = "Turkish Lira", r.TTD = "Trinidad and Tobago Dollar", r.TWD = "New Taiwan Dollar", r.TZS = "Tanzanian Shilling", r.UAH = "Ukrainian Hryvnia", r.UGX = "Ugandan Shilling", r.USD = "United States Dollar", r.USN = "United States Dollar (Next day)", r.USS = "United States Dollar (Same day)", r.UYI = "Uruguay Peso en Unidades Indexadas", r.UYU = "Uruguayan Peso", r.UZS = "Uzbekistan Som", r.VEF = "Venezuelan Bol\xEDvar", r.VND = "Vietnamese Dong", r.VUV = "Vanuatu Vatu", r.WST = "Samoan Tala", r.XAF = "CFA Franc BEAC", r.XAG = "Silver (one troy ounce)", r.XAU = "Gold (one troy ounce)", r.XBA = "European Composite Unit", r.XBB = "European Monetary Unit", r.XBC = "European Unit of Account (XBC)", r.XBD = "European Unit of Account (XBD)", r.XCD = "East Caribbean Dollar", r.XDR = "Special Drawing Rights", r.XFU = "UIC-Franc", r.XOF = "CFA Franc BCEAO", r.XPD = "Palladium (one troy ounce)", r.XPF = "CFP Franc", r.XPT = "Platinum (one troy ounce)", r.XTS = "Testing Currency Code", r.XXX = "No Currency", r.YER = "Yemeni Rial", r.ZAR = "South African Rand", r.ZMW = "Zambian Kwacha", exports.CurrencyCode = undefined, (o = exports.CurrencyCode || (exports.CurrencyCode = {})).ANG = "ANG", o.AWG = "AWG", o.BOB = "BOB", o.BOV = "BOV", o.CHF = "CHF", o.CHE = "CHE", o.CLF = "CLF", o.CLP = "CLP", o.COP = "COP", o.COU = "COU", o.CUC = "CUC", o.CUP = "CUP", o.EUR = "EUR", o.GBP = "GBP", o.MXN = "MXN", o.MXV = "MXV", o.USD = "USD", o.USN = "USN", o.USS = "USS", o.UYI = "UYI", o.UYU = "UYU", o.XAG = "XAG", o.XAU = "XAU", o.XBA = "XBA", o.XBB = "XBB", o.XBC = "XBC", o.XBD = "XBD", o.XDR = "XDR", o.XFU = "XFU", o.XPD = "XPD", o.XXX = "XXX", o.XPT = "XPT", o.XTS = "XTS", o.AED = "AED", o.AFN = "AFN", o.ALL = "ALL", o.AMD = "AMD", o.AOA = "AOA", o.ARS = "ARS", o.AUD = "AUD", o.AZN = "AZN", o.BAM = "BAM", o.BBD = "BBD", o.BDT = "BDT", o.BGN = "BGN", o.BHD = "BHD", o.BIF = "BIF", o.BMD = "BMD", o.BND = "BND", o.BRL = "BRL", o.BSD = "BSD", o.BTN = "BTN", o.BWP = "BWP", o.BYR = "BYR", o.BZD = "BZD", o.CAD = "CAD", o.CDF = "CDF", o.CHW = "CHW", o.CNY = "CNY", o.CRC = "CRC", o.CVE = "CVE", o.CZK = "CZK", o.DJF = "DJF", o.DKK = "DKK", o.DOP = "DOP", o.DZD = "DZD", o.EGP = "EGP", o.ERN = "ERN", o.ETB = "ETB", o.FJD = "FJD", o.FKP = "FKP", o.GEL = "GEL", o.GHS = "GHS", o.GIP = "GIP", o.GMD = "GMD", o.GNF = "GNF", o.GTQ = "GTQ", o.GYD = "GYD", o.HKD = "HKD", o.HNL = "HNL", o.HRK = "HRK", o.HTG = "HTG", o.HUF = "HUF", o.IDR = "IDR", o.ILS = "ILS", o.INR = "INR", o.IQD = "IQD", o.IRR = "IRR", o.ISK = "ISK", o.JMD = "JMD", o.JOD = "JOD", o.JPY = "JPY", o.KES = "KES", o.KGS = "KGS", o.KHR = "KHR", o.KMF = "KMF", o.KPW = "KPW", o.KRW = "KRW", o.KWD = "KWD", o.KYD = "KYD", o.KZT = "KZT", o.LAK = "LAK", o.LBP = "LBP", o.LKR = "LKR", o.LRD = "LRD", o.LSL = "LSL", o.LTL = "LTL", o.LVL = "LVL", o.LYD = "LYD", o.MAD = "MAD", o.MDL = "MDL", o.MGA = "MGA", o.MKD = "MKD", o.MMK = "MMK", o.MNT = "MNT", o.MOP = "MOP", o.MRO = "MRO", o.MUR = "MUR", o.MVR = "MVR", o.MWK = "MWK", o.MYR = "MYR", o.MZN = "MZN", o.NAD = "NAD", o.NGN = "NGN", o.NIO = "NIO", o.NOK = "NOK", o.NPR = "NPR", o.NZD = "NZD", o.OMR = "OMR", o.PAB = "PAB", o.PEN = "PEN", o.PGK = "PGK", o.PHP = "PHP", o.PKR = "PKR", o.PLN = "PLN", o.PYG = "PYG", o.QAR = "QAR", o.RON = "RON", o.RSD = "RSD", o.RUB = "RUB", o.RWF = "RWF", o.SAR = "SAR", o.SBD = "SBD", o.SCR = "SCR", o.SDG = "SDG", o.SEK = "SEK", o.SGD = "SGD", o.SHP = "SHP", o.SLL = "SLL", o.SOS = "SOS", o.SRD = "SRD", o.SSP = "SSP", o.STD = "STD", o.SYP = "SYP", o.SZL = "SZL", o.THB = "THB", o.TJS = "TJS", o.TMT = "TMT", o.TND = "TND", o.TOP = "TOP", o.TRY = "TRY", o.TTD = "TTD", o.TWD = "TWD", o.TZS = "TZS", o.UAH = "UAH", o.UGX = "UGX", o.UZS = "UZS", o.VEF = "VEF", o.VND = "VND", o.VUV = "VUV", o.WST = "WST", o.XAF = "XAF", o.XCD = "XCD", o.XOF = "XOF", o.XPF = "XPF", o.YER = "YER", o.ZAR = "ZAR", o.ZMW = "ZMW", exports.CurrencyLocale = undefined, (n = exports.CurrencyLocale || (exports.CurrencyLocale = {})).nl_AW = "nl-AW", n.es_BO = "es-BO", n.de_CH = "de-CH", n.es_CL = "es-CL", n.es_CO = "es-CO", n.es_CU = "es-CU", n.en_GB = "en-GB", n.es_MX = "es-MX", n.en_US = "en-US", n.es_UY = "es-UY", n.en = "en", n.ar_AE = "ar-AE", n.ps_AF = "ps-AF", n.sq_AL = "sq-AL", n.hy_AM = "hy-AM", n.pt_AO = "pt-AO", n.es_AR = "es-AR", n.en_AU = "en-AU", n.az_AZ = "az-AZ", n.bs_BA = "bs-BA", n.en_BB = "en-BB", n.bn_BD = "bn-BD", n.bg_BG = "bg-BG", n.ar_BH = "ar-BH", n.fr_BI = "fr-BI", n.en_BM = "en-BM", n.ms_BN = "ms-BN", n.pt_BR = "pt-BR", n.en_BS = "en-BS", n.dz_BT = "dz-BT", n.en_BW = "en-BW", n.be_BY = "be-BY", n.en_BZ = "en-BZ", n.en_CA = "en-CA", n.fr_CD = "fr-CD", n.fr_CH = "fr-CH", n.zh_CN = "zh-CN", n.es_CR = "es-CR", n.pt_CV = "pt-CV", n.cs_CZ = "cs-CZ", n.fr_DJ = "fr-DJ", n.da_DK = "da-DK", n.es_DO = "es-DO", n.ar_DZ = "ar-DZ", n.ar_EG = "ar-EG", n.ti_ER = "ti-ER", n.am_ET = "am-ET", n.en_FJ = "en-FJ", n.en_FK = "en-FK", n.ka_GE = "ka-GE", n.en_GH = "en-GH", n.en_GI = "en-GI", n.en_GM = "en-GM", n.fr_GN = "fr-GN", n.es_GT = "es-GT", n.en_GY = "en-GY", n.zh_HK = "zh-HK", n.es_HN = "es-HN", n.hr_HR = "hr-HR", n.ht_HT = "ht-HT", n.hu_HU = "hu-HU", n.id_ID = "id-ID", n.he_IL = "he-IL", n.hi_IN = "hi-IN", n.ar_IQ = "ar-IQ", n.fa_IR = "fa-IR", n.is_IS = "is-IS", n.en_JM = "en-JM", n.ar_JO = "ar-JO", n.ja_JP = "ja-JP", n.sw_KE = "sw-KE", n.ky_KG = "ky-KG", n.km_KH = "km-KH", n.ar_KM = "ar-KM", n.ko_KP = "ko-KP", n.ko_KR = "ko-KR", n.ar_KW = "ar-KW", n.en_KY = "en-KY", n.kk_KZ = "kk-KZ", n.lo_LA = "lo-LA", n.ar_LB = "ar-LB", n.si_LK = "si-LK", n.en_LR = "en-LR", n.st_LS = "st-LS", n.lt_LT = "lt-LT", n.lv_LV = "lv-LV", n.ar_LY = "ar-LY", n.ar_MA = "ar-MA", n.ro_MD = "ro-MD", n.mg_MG = "mg-MG", n.mk_MK = "mk-MK", n.my_MM = "my-MM", n.mn_MN = "mn-MN", n.zh_MO = "zh-MO", n.ar_MR = "ar-MR", n.en_MU = "en-MU", n.dv_MV = "dv-MV", n.ny_MW = "ny-MW", n.ms_MY = "ms-MY", n.pt_MZ = "pt-MZ", n.af_NA = "af-NA", n.ig_NG = "ig-NG", n.es_NI = "es-NI", n.nb_NO = "nb-NO", n.ne_NP = "ne-NP", n.en_NZ = "en-NZ", n.ar_OM = "ar-OM", n.es_PA = "es-PA", n.es_PE = "es-PE", n.en_PG = "en-PG", n.en_PH = "en-PH", n.ur_PK = "ur-PK", n.pl_PL = "pl-PL", n.es_PY = "es-PY", n.ar_QA = "ar-QA", n.ro_RO = "ro-RO", n.sr_RS = "sr-RS", n.ru_RU = "ru-RU", n.rw_RW = "rw-RW", n.ar_SA = "ar-SA", n.en_SB = "en-SB", n.en_SC = "en-SC", n.ar_SD = "ar-SD", n.sv_SE = "sv-SE", n.en_SG = "en-SG", n.en_SH = "en-SH", n.en_SL = "en-SL", n.so_SO = "so-SO", n.nl_SR = "nl-SR", n.nl_BE = "nl-BE", n.nl_NL = "nl-NL", n.en_SS = "en-SS", n.pt_ST = "pt-ST", n.pt_PT = "pt-PT", n.ar_SY = "ar-SY", n.ss_SZ = "ss-SZ", n.th_TH = "th-TH", n.tg_TJ = "tg-TJ", n.tk_TM = "tk-TM", n.ar_TN = "ar-TN", n.to_TO = "to-TO", n.tr_TR = "tr-TR", n.en_TT = "en-TT", n.zh_TW = "zh-TW", n.sw_TZ = "sw-TZ", n.uk_UA = "uk-UA", n.sw_UG = "sw-UG", n.uz_UZ = "uz-UZ", n.es_VE = "es-VE", n.es_ES = "es-ES", n.vi_VN = "vi-VN", n.en_VU = "en-VU", n.sm_WS = "sm-WS", n.fr_CM = "fr-CM", n.en_VC = "en-VC", n.fr_BJ = "fr-BJ", n.fr_PF = "fr-PF", n.fr_BE = "fr-BE", n.fr_FR = "fr-FR", n.ar_YE = "ar-YE", n.zu_ZA = "zu-ZA", n.en_ZM = "en-ZM", n.it_IT = "it-IT", n.de_DE = "de-DE", n.de_AT = "de-AT", n.el_GR = "el-GR", n.ee_EE = "ee-EE", n.fi_FI = "fi-FI", n.ga_IE = "ga-IE", n.mt_MT = "mt-MT", n.sk_SK = "sk-SK", n.sl_SI = "sl-SI", n.fr_LU = "fr-LU", n.de_LU = "de-LU", n.lb_LU = "lb-LU", n.cy_CY = "cy-CY", n.ad_AD = "ad-AD", n.al_AL = "al-AL", n.by_BY = "by-BY", n.ba_BA = "ba-BA", n.cz_CZ = "cz-CZ", n.dk_DK = "dk-DK", n.fo_FO = "fo-FO", n.gi_GI = "gi-GI", n.il_IL = "il-IL", n.xk_XK = "xk-XK", n.li_LI = "li-LI", n.lu_LU = "lu-LU", n.md_MD = "md-MD", n.mc_MC = "mc-MC", n.me_ME = "me-ME", n.no_NO = "no-NO", n.rs_RS = "rs-RS", n.sm_SM = "sm-SM", n.si_SI = "si-SI", n.se_SE = "se-SE", n.ch_CH = "ch-CH", n.ua_UA = "ua-UA", n.va_VA = "va-VA", exports.CurrencyCountry = undefined, (c = exports.CurrencyCountry || (exports.CurrencyCountry = {})).AED = "United Arab Emirates", c.AFN = "Afghanistan", c.ALL = "Albania", c.AMD = "Armenia", c.ANG = "Netherlands Antilles", c.AOA = "Angola", c.ARS = "Argentina", c.AUD = "Australia", c.AWG = "Aruba", c.AZN = "Azerbaijan", c.BAM = "Bosnia and Herzegovina", c.BBD = "Barbados", c.BDT = "Bangladesh", c.BGN = "Bulgaria", c.BHD = "Bahrain", c.BIF = "Burundi", c.BMD = "Bermuda", c.BND = "Brunei", c.BOB = "Bolivia", c.BOV = "Bolivia", c.BRL = "Brazil", c.BSD = "Bahamas", c.BTN = "Bhutan", c.BWP = "Botswana", c.BYR = "Belarus", c.BZD = "Belize", c.CAD = "Canada", c.CDF = "Democratic Republic of the Congo", c.CHE = "Switzerland", c.CHF = "Switzerland", c.CHW = "Switzerland", c.CLF = "Chile", c.CLP = "Chile", c.CNY = "China", c.COP = "Colombia", c.COU = "Colombia", c.CRC = "Costa Rica", c.CUC = "Cuba", c.CUP = "Cuba", c.CVE = "Cape Verde", c.CZK = "Czech Republic", c.DJF = "Djibouti", c.DKK = "Denmark", c.DOP = "Dominican Republic", c.DZD = "Algeria", c.EGP = "Egypt", c.ERN = "Eritrea", c.ETB = "Ethiopia", c.EUR = "Eurozone", c.FJD = "Fiji", c.FKP = "Falkland Islands", c.GBP = "United Kingdom", c.GEL = "Georgia", c.GHS = "Ghana", c.GIP = "Gibraltar", c.GMD = "Gambia", c.GNF = "Guinea", c.GTQ = "Guatemala", c.GYD = "Guyana", c.HKD = "Hong Kong", c.HNL = "Honduras", c.HRK = "Croatia", c.HTG = "Haiti", c.HUF = "Hungary", c.IDR = "Indonesia", c.ILS = "Israel", c.INR = "India", c.IQD = "Iraq", c.IRR = "Iran", c.ISK = "Iceland", c.JMD = "Jamaica", c.JOD = "Jordan", c.JPY = "Japan", c.KES = "Kenya", c.KGS = "Kyrgyzstan", c.KHR = "Cambodia", c.KMF = "Comoros", c.KPW = "North Korea", c.KRW = "South Korea", c.KWD = "Kuwait", c.KYD = "Cayman Islands", c.KZT = "Kazakhstan", c.LAK = "Laos", c.LBP = "Lebanon", c.LKR = "Sri Lanka", c.LRD = "Liberia", c.LSL = "Lesotho", c.LTL = "Lithuania", c.LVL = "Latvia", c.LYD = "Libya", c.MAD = "Morocco", c.MDL = "Moldova", c.MGA = "Madagascar", c.MKD = "North Macedonia", c.MMK = "Myanmar", c.MNT = "Mongolia", c.MOP = "Macau", c.MRO = "Mauritania", c.MUR = "Mauritius", c.MVR = "Maldives", c.MWK = "Malawi", c.MXN = "Mexico", c.MXV = "Mexico", c.MYR = "Malaysia", c.MZN = "Mozambique", c.NAD = "Namibia", c.NGN = "Nigeria", c.NIO = "Nicaragua", c.NOK = "Norway", c.NPR = "Nepal", c.NZD = "New Zealand", c.OMR = "Oman", c.PAB = "Panama", c.PEN = "Peru", c.PGK = "Papua New Guinea", c.PHP = "Philippines", c.PKR = "Pakistan", c.PLN = "Poland", c.PYG = "Paraguay", c.QAR = "Qatar", c.RON = "Romania", c.RSD = "Serbia", c.RUB = "Russia", c.RWF = "Rwanda", c.SAR = "Saudi Arabia", c.SBD = "Solomon Islands", c.SCR = "Seychelles", c.SDG = "Sudan", c.SEK = "Sweden", c.SGD = "Singapore", c.SHP = "Saint Helena", c.SLL = "Sierra Leone", c.SOS = "Somalia", c.SRD = "Suriname", c.SSP = "South Sudan", c.STD = "S\xE3o Tom\xE9 and Pr\xEDncipe", c.SYP = "Syria", c.SZL = "Swaziland", c.THB = "Thailand", c.TJS = "Tajikistan", c.TMT = "Turkmenistan", c.TND = "Tunisia", c.TOP = "Tonga", c.TRY = "Turkey", c.TTD = "Trinidad and Tobago", c.TWD = "Taiwan", c.TZS = "Tanzania", c.UAH = "Ukraine", c.UGX = "Uganda", c.USD = "United States", c.USN = "United States", c.USS = "United States", c.UYI = "Uruguay", c.UYU = "Uruguay", c.UZS = "Uzbekistan", c.VEF = "Venezuela", c.VND = "Vietnam", c.VUV = "Vanuatu", c.WST = "Samoa", c.XAF = "Central African Republic", c.XAG = "Worldwide", c.XAU = "Worldwide", c.XBA = "Worldwide", c.XBB = "Worldwide", c.XBC = "Worldwide", c.XBD = "Worldwide", c.XCD = "East Caribbean", c.XDR = "International Monetary Fund", c.XFU = "Worldwide", c.XOF = "Benin", c.XPD = "Worldwide", c.XPF = "French Polynesia", c.XPT = "Worldwide", c.XTS = "Worldwide", c.XXX = "Worldwide", c.YER = "Yemen", c.ZAR = "South Africa", c.ZMW = "Zambia";
  var C = { [exports.CurrencyLocale.nl_AW]: [exports.CurrencyCode.ANG, exports.CurrencyCode.AWG], [exports.CurrencyLocale.es_BO]: [exports.CurrencyCode.BOB, exports.CurrencyCode.BOV], [exports.CurrencyLocale.de_CH]: [exports.CurrencyCode.CHF, exports.CurrencyCode.CHE], [exports.CurrencyLocale.es_CL]: [exports.CurrencyCode.CLF, exports.CurrencyCode.CLP], [exports.CurrencyLocale.es_CO]: [exports.CurrencyCode.COP, exports.CurrencyCode.COU], [exports.CurrencyLocale.es_CU]: [exports.CurrencyCode.CUC, exports.CurrencyCode.CUP], [exports.CurrencyLocale.es_MX]: [exports.CurrencyCode.MXN, exports.CurrencyCode.MXV], [exports.CurrencyLocale.en_US]: [exports.CurrencyCode.USD, exports.CurrencyCode.USN, exports.CurrencyCode.USS], [exports.CurrencyLocale.es_UY]: [exports.CurrencyCode.UYI, exports.CurrencyCode.UYU], [exports.CurrencyLocale.en]: [exports.CurrencyCode.XAG, exports.CurrencyCode.XAU, exports.CurrencyCode.XBA, exports.CurrencyCode.XBB, exports.CurrencyCode.XBC, exports.CurrencyCode.XBD, exports.CurrencyCode.XDR, exports.CurrencyCode.XFU, exports.CurrencyCode.XPD, exports.CurrencyCode.XXX, exports.CurrencyCode.XPT, exports.CurrencyCode.XTS], [exports.CurrencyLocale.en_GB]: exports.CurrencyCode.GBP, [exports.CurrencyLocale.ar_AE]: exports.CurrencyCode.AED, [exports.CurrencyLocale.ps_AF]: exports.CurrencyCode.AFN, [exports.CurrencyLocale.sq_AL]: exports.CurrencyCode.ALL, [exports.CurrencyLocale.hy_AM]: exports.CurrencyCode.AMD, [exports.CurrencyLocale.pt_AO]: exports.CurrencyCode.AOA, [exports.CurrencyLocale.es_AR]: exports.CurrencyCode.ARS, [exports.CurrencyLocale.en_AU]: exports.CurrencyCode.AUD, [exports.CurrencyLocale.az_AZ]: exports.CurrencyCode.AZN, [exports.CurrencyLocale.bs_BA]: exports.CurrencyCode.BAM, [exports.CurrencyLocale.en_BB]: exports.CurrencyCode.BBD, [exports.CurrencyLocale.bn_BD]: exports.CurrencyCode.BDT, [exports.CurrencyLocale.bg_BG]: exports.CurrencyCode.BGN, [exports.CurrencyLocale.ar_BH]: exports.CurrencyCode.BHD, [exports.CurrencyLocale.fr_BI]: exports.CurrencyCode.BIF, [exports.CurrencyLocale.en_BM]: exports.CurrencyCode.BMD, [exports.CurrencyLocale.ms_BN]: exports.CurrencyCode.BND, [exports.CurrencyLocale.pt_BR]: exports.CurrencyCode.BRL, [exports.CurrencyLocale.en_BS]: exports.CurrencyCode.BSD, [exports.CurrencyLocale.dz_BT]: exports.CurrencyCode.BTN, [exports.CurrencyLocale.en_BW]: exports.CurrencyCode.BWP, [exports.CurrencyLocale.be_BY]: exports.CurrencyCode.BYR, [exports.CurrencyLocale.en_BZ]: exports.CurrencyCode.BZD, [exports.CurrencyLocale.en_CA]: exports.CurrencyCode.CAD, [exports.CurrencyLocale.fr_CD]: exports.CurrencyCode.CDF, [exports.CurrencyLocale.fr_CH]: exports.CurrencyCode.CHW, [exports.CurrencyLocale.zh_CN]: exports.CurrencyCode.CNY, [exports.CurrencyLocale.es_CR]: exports.CurrencyCode.CRC, [exports.CurrencyLocale.pt_CV]: exports.CurrencyCode.CVE, [exports.CurrencyLocale.cs_CZ]: exports.CurrencyCode.CZK, [exports.CurrencyLocale.fr_DJ]: exports.CurrencyCode.DJF, [exports.CurrencyLocale.da_DK]: exports.CurrencyCode.DKK, [exports.CurrencyLocale.es_DO]: exports.CurrencyCode.DOP, [exports.CurrencyLocale.ar_DZ]: exports.CurrencyCode.DZD, [exports.CurrencyLocale.ar_EG]: exports.CurrencyCode.EGP, [exports.CurrencyLocale.ti_ER]: exports.CurrencyCode.ERN, [exports.CurrencyLocale.am_ET]: exports.CurrencyCode.ETB, [exports.CurrencyLocale.en_FJ]: exports.CurrencyCode.FJD, [exports.CurrencyLocale.en_FK]: exports.CurrencyCode.FKP, [exports.CurrencyLocale.ka_GE]: exports.CurrencyCode.GEL, [exports.CurrencyLocale.en_GH]: exports.CurrencyCode.GHS, [exports.CurrencyLocale.en_GI]: exports.CurrencyCode.GIP, [exports.CurrencyLocale.en_GM]: exports.CurrencyCode.GMD, [exports.CurrencyLocale.fr_GN]: exports.CurrencyCode.GNF, [exports.CurrencyLocale.es_GT]: exports.CurrencyCode.GTQ, [exports.CurrencyLocale.en_GY]: exports.CurrencyCode.GYD, [exports.CurrencyLocale.zh_HK]: exports.CurrencyCode.HKD, [exports.CurrencyLocale.es_HN]: exports.CurrencyCode.HNL, [exports.CurrencyLocale.hr_HR]: exports.CurrencyCode.HRK, [exports.CurrencyLocale.ht_HT]: exports.CurrencyCode.HTG, [exports.CurrencyLocale.hu_HU]: exports.CurrencyCode.HUF, [exports.CurrencyLocale.id_ID]: exports.CurrencyCode.IDR, [exports.CurrencyLocale.he_IL]: exports.CurrencyCode.ILS, [exports.CurrencyLocale.hi_IN]: exports.CurrencyCode.INR, [exports.CurrencyLocale.ar_IQ]: exports.CurrencyCode.IQD, [exports.CurrencyLocale.fa_IR]: exports.CurrencyCode.IRR, [exports.CurrencyLocale.is_IS]: exports.CurrencyCode.ISK, [exports.CurrencyLocale.en_JM]: exports.CurrencyCode.JMD, [exports.CurrencyLocale.ar_JO]: exports.CurrencyCode.JOD, [exports.CurrencyLocale.ja_JP]: exports.CurrencyCode.JPY, [exports.CurrencyLocale.sw_KE]: exports.CurrencyCode.KES, [exports.CurrencyLocale.ky_KG]: exports.CurrencyCode.KGS, [exports.CurrencyLocale.km_KH]: exports.CurrencyCode.KHR, [exports.CurrencyLocale.ar_KM]: exports.CurrencyCode.KMF, [exports.CurrencyLocale.ko_KP]: exports.CurrencyCode.KPW, [exports.CurrencyLocale.ko_KR]: exports.CurrencyCode.KRW, [exports.CurrencyLocale.ar_KW]: exports.CurrencyCode.KWD, [exports.CurrencyLocale.en_KY]: exports.CurrencyCode.KYD, [exports.CurrencyLocale.kk_KZ]: exports.CurrencyCode.KZT, [exports.CurrencyLocale.lo_LA]: exports.CurrencyCode.LAK, [exports.CurrencyLocale.ar_LB]: exports.CurrencyCode.LBP, [exports.CurrencyLocale.si_LK]: exports.CurrencyCode.LKR, [exports.CurrencyLocale.en_LR]: exports.CurrencyCode.LRD, [exports.CurrencyLocale.st_LS]: exports.CurrencyCode.LSL, [exports.CurrencyLocale.lt_LT]: exports.CurrencyCode.LTL, [exports.CurrencyLocale.lv_LV]: exports.CurrencyCode.LVL, [exports.CurrencyLocale.ar_LY]: exports.CurrencyCode.LYD, [exports.CurrencyLocale.ar_MA]: exports.CurrencyCode.MAD, [exports.CurrencyLocale.ro_MD]: exports.CurrencyCode.MDL, [exports.CurrencyLocale.mg_MG]: exports.CurrencyCode.MGA, [exports.CurrencyLocale.mk_MK]: exports.CurrencyCode.MKD, [exports.CurrencyLocale.my_MM]: exports.CurrencyCode.MMK, [exports.CurrencyLocale.mn_MN]: exports.CurrencyCode.MNT, [exports.CurrencyLocale.zh_MO]: exports.CurrencyCode.MOP, [exports.CurrencyLocale.ar_MR]: exports.CurrencyCode.MRO, [exports.CurrencyLocale.en_MU]: exports.CurrencyCode.MUR, [exports.CurrencyLocale.dv_MV]: exports.CurrencyCode.MVR, [exports.CurrencyLocale.ny_MW]: exports.CurrencyCode.MWK, [exports.CurrencyLocale.ms_MY]: exports.CurrencyCode.MYR, [exports.CurrencyLocale.pt_MZ]: exports.CurrencyCode.MZN, [exports.CurrencyLocale.af_NA]: exports.CurrencyCode.NAD, [exports.CurrencyLocale.ig_NG]: exports.CurrencyCode.NGN, [exports.CurrencyLocale.es_NI]: exports.CurrencyCode.NIO, [exports.CurrencyLocale.nb_NO]: exports.CurrencyCode.NOK, [exports.CurrencyLocale.ne_NP]: exports.CurrencyCode.NPR, [exports.CurrencyLocale.en_NZ]: exports.CurrencyCode.NZD, [exports.CurrencyLocale.ar_OM]: exports.CurrencyCode.OMR, [exports.CurrencyLocale.es_PA]: exports.CurrencyCode.PAB, [exports.CurrencyLocale.es_PE]: exports.CurrencyCode.PEN, [exports.CurrencyLocale.en_PG]: exports.CurrencyCode.PGK, [exports.CurrencyLocale.en_PH]: exports.CurrencyCode.PHP, [exports.CurrencyLocale.ur_PK]: exports.CurrencyCode.PKR, [exports.CurrencyLocale.pl_PL]: exports.CurrencyCode.PLN, [exports.CurrencyLocale.es_PY]: exports.CurrencyCode.PYG, [exports.CurrencyLocale.ar_QA]: exports.CurrencyCode.QAR, [exports.CurrencyLocale.ro_RO]: exports.CurrencyCode.RON, [exports.CurrencyLocale.sr_RS]: exports.CurrencyCode.RSD, [exports.CurrencyLocale.ru_RU]: exports.CurrencyCode.RUB, [exports.CurrencyLocale.rw_RW]: exports.CurrencyCode.RWF, [exports.CurrencyLocale.ar_SA]: exports.CurrencyCode.SAR, [exports.CurrencyLocale.en_SB]: exports.CurrencyCode.SBD, [exports.CurrencyLocale.en_SC]: exports.CurrencyCode.SCR, [exports.CurrencyLocale.ar_SD]: exports.CurrencyCode.SDG, [exports.CurrencyLocale.sv_SE]: exports.CurrencyCode.SEK, [exports.CurrencyLocale.en_SG]: exports.CurrencyCode.SGD, [exports.CurrencyLocale.en_SH]: exports.CurrencyCode.SHP, [exports.CurrencyLocale.en_SL]: exports.CurrencyCode.SLL, [exports.CurrencyLocale.so_SO]: exports.CurrencyCode.SOS, [exports.CurrencyLocale.nl_SR]: exports.CurrencyCode.SRD, [exports.CurrencyLocale.en_SS]: exports.CurrencyCode.SSP, [exports.CurrencyLocale.pt_ST]: exports.CurrencyCode.STD, [exports.CurrencyLocale.ar_SY]: exports.CurrencyCode.SYP, [exports.CurrencyLocale.ss_SZ]: exports.CurrencyCode.SZL, [exports.CurrencyLocale.th_TH]: exports.CurrencyCode.THB, [exports.CurrencyLocale.tg_TJ]: exports.CurrencyCode.TJS, [exports.CurrencyLocale.tk_TM]: exports.CurrencyCode.TMT, [exports.CurrencyLocale.ar_TN]: exports.CurrencyCode.TND, [exports.CurrencyLocale.to_TO]: exports.CurrencyCode.TOP, [exports.CurrencyLocale.tr_TR]: exports.CurrencyCode.TRY, [exports.CurrencyLocale.en_TT]: exports.CurrencyCode.TTD, [exports.CurrencyLocale.zh_TW]: exports.CurrencyCode.TWD, [exports.CurrencyLocale.sw_TZ]: exports.CurrencyCode.TZS, [exports.CurrencyLocale.uk_UA]: exports.CurrencyCode.UAH, [exports.CurrencyLocale.sw_UG]: exports.CurrencyCode.UGX, [exports.CurrencyLocale.uz_UZ]: exports.CurrencyCode.UZS, [exports.CurrencyLocale.es_VE]: exports.CurrencyCode.VEF, [exports.CurrencyLocale.vi_VN]: exports.CurrencyCode.VND, [exports.CurrencyLocale.en_VU]: exports.CurrencyCode.VUV, [exports.CurrencyLocale.sm_WS]: exports.CurrencyCode.WST, [exports.CurrencyLocale.fr_CM]: exports.CurrencyCode.XAF, [exports.CurrencyLocale.en_VC]: exports.CurrencyCode.XCD, [exports.CurrencyLocale.fr_BJ]: exports.CurrencyCode.XOF, [exports.CurrencyLocale.fr_PF]: exports.CurrencyCode.XPF, [exports.CurrencyLocale.ar_YE]: exports.CurrencyCode.YER, [exports.CurrencyLocale.zu_ZA]: exports.CurrencyCode.ZAR, [exports.CurrencyLocale.en_ZM]: exports.CurrencyCode.ZMW, [exports.CurrencyLocale.nl_BE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.nl_NL]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.pt_PT]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.es_ES]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.fr_BE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.fr_FR]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.it_IT]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.de_DE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.de_AT]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.el_GR]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ee_EE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.fi_FI]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ga_IE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.mt_MT]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.sk_SK]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.sl_SI]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.fr_LU]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.de_LU]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.lb_LU]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.cy_CY]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ad_AD]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.al_AL]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.by_BY]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ba_BA]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.cz_CZ]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.dk_DK]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.fo_FO]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.gi_GI]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.il_IL]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.xk_XK]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.li_LI]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.lu_LU]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.md_MD]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.mc_MC]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.me_ME]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.no_NO]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.rs_RS]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.sm_SM]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.si_SI]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.se_SE]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ch_CH]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.ua_UA]: exports.CurrencyCode.EUR, [exports.CurrencyLocale.va_VA]: exports.CurrencyCode.EUR };
  var a = { AED: exports.CurrencyLocale.ar_AE, AFN: exports.CurrencyLocale.ps_AF, ALL: exports.CurrencyLocale.sq_AL, AMD: exports.CurrencyLocale.hy_AM, ANG: exports.CurrencyLocale.nl_AW, AOA: exports.CurrencyLocale.pt_AO, ARS: exports.CurrencyLocale.es_AR, AUD: exports.CurrencyLocale.en_AU, AWG: exports.CurrencyLocale.nl_AW, AZN: exports.CurrencyLocale.az_AZ, BAM: exports.CurrencyLocale.bs_BA, BBD: exports.CurrencyLocale.en_BB, BDT: exports.CurrencyLocale.bn_BD, BGN: exports.CurrencyLocale.bg_BG, BHD: exports.CurrencyLocale.ar_BH, BIF: exports.CurrencyLocale.fr_BI, BMD: exports.CurrencyLocale.en_BM, BND: exports.CurrencyLocale.ms_BN, BOB: exports.CurrencyLocale.es_BO, BOV: exports.CurrencyLocale.es_BO, BRL: exports.CurrencyLocale.pt_BR, BSD: exports.CurrencyLocale.en_BS, BTN: exports.CurrencyLocale.dz_BT, BWP: exports.CurrencyLocale.en_BW, BYR: exports.CurrencyLocale.be_BY, BZD: exports.CurrencyLocale.en_BZ, CAD: exports.CurrencyLocale.en_CA, CDF: exports.CurrencyLocale.fr_CD, CHE: exports.CurrencyLocale.de_CH, CHF: exports.CurrencyLocale.de_CH, CHW: exports.CurrencyLocale.fr_CH, CLF: exports.CurrencyLocale.es_CL, CLP: exports.CurrencyLocale.es_CL, CNY: exports.CurrencyLocale.zh_CN, COP: exports.CurrencyLocale.es_CO, COU: exports.CurrencyLocale.es_CO, CRC: exports.CurrencyLocale.es_CR, CUC: exports.CurrencyLocale.es_CU, CUP: exports.CurrencyLocale.es_CU, CVE: exports.CurrencyLocale.pt_CV, CZK: exports.CurrencyLocale.cs_CZ, DJF: exports.CurrencyLocale.fr_DJ, DKK: exports.CurrencyLocale.da_DK, DOP: exports.CurrencyLocale.es_DO, DZD: exports.CurrencyLocale.ar_DZ, EGP: exports.CurrencyLocale.ar_EG, ERN: exports.CurrencyLocale.ti_ER, ETB: exports.CurrencyLocale.am_ET, EUR: [exports.CurrencyLocale.de_AT, exports.CurrencyLocale.fr_BE, exports.CurrencyLocale.nl_BE, exports.CurrencyLocale.de_DE, exports.CurrencyLocale.el_GR, exports.CurrencyLocale.es_ES, exports.CurrencyLocale.ee_EE, exports.CurrencyLocale.fi_FI, exports.CurrencyLocale.fr_FR, exports.CurrencyLocale.ga_IE, exports.CurrencyLocale.it_IT, exports.CurrencyLocale.lv_LV, exports.CurrencyLocale.lt_LT, exports.CurrencyLocale.mt_MT, exports.CurrencyLocale.nl_NL, exports.CurrencyLocale.pt_PT, exports.CurrencyLocale.sk_SK, exports.CurrencyLocale.sl_SI, exports.CurrencyLocale.fr_LU, exports.CurrencyLocale.de_LU, exports.CurrencyLocale.lb_LU, exports.CurrencyLocale.cy_CY, exports.CurrencyLocale.ad_AD, exports.CurrencyLocale.al_AL, exports.CurrencyLocale.by_BY, exports.CurrencyLocale.ba_BA, exports.CurrencyLocale.bg_BG, exports.CurrencyLocale.hr_HR, exports.CurrencyLocale.cz_CZ, exports.CurrencyLocale.dk_DK, exports.CurrencyLocale.fo_FO, exports.CurrencyLocale.gi_GI, exports.CurrencyLocale.hu_HU, exports.CurrencyLocale.is_IS, exports.CurrencyLocale.il_IL, exports.CurrencyLocale.xk_XK, exports.CurrencyLocale.li_LI, exports.CurrencyLocale.lu_LU, exports.CurrencyLocale.mk_MK, exports.CurrencyLocale.md_MD, exports.CurrencyLocale.mc_MC, exports.CurrencyLocale.me_ME, exports.CurrencyLocale.no_NO, exports.CurrencyLocale.pl_PL, exports.CurrencyLocale.ro_RO, exports.CurrencyLocale.rs_RS, exports.CurrencyLocale.sm_SM, exports.CurrencyLocale.sk_SK, exports.CurrencyLocale.si_SI, exports.CurrencyLocale.se_SE, exports.CurrencyLocale.ch_CH, exports.CurrencyLocale.tr_TR, exports.CurrencyLocale.ua_UA, exports.CurrencyLocale.va_VA], FJD: exports.CurrencyLocale.en_FJ, FKP: exports.CurrencyLocale.en_FK, GBP: exports.CurrencyLocale.en_GB, GEL: exports.CurrencyLocale.ka_GE, GHS: exports.CurrencyLocale.en_GH, GIP: exports.CurrencyLocale.en_GI, GMD: exports.CurrencyLocale.en_GM, GNF: exports.CurrencyLocale.fr_GN, GTQ: exports.CurrencyLocale.es_GT, GYD: exports.CurrencyLocale.en_GY, HKD: exports.CurrencyLocale.zh_HK, HNL: exports.CurrencyLocale.es_HN, HRK: exports.CurrencyLocale.hr_HR, HTG: exports.CurrencyLocale.ht_HT, HUF: exports.CurrencyLocale.hu_HU, IDR: exports.CurrencyLocale.id_ID, ILS: exports.CurrencyLocale.he_IL, INR: exports.CurrencyLocale.hi_IN, IQD: exports.CurrencyLocale.ar_IQ, IRR: exports.CurrencyLocale.fa_IR, ISK: exports.CurrencyLocale.is_IS, JMD: exports.CurrencyLocale.en_JM, JOD: exports.CurrencyLocale.ar_JO, JPY: exports.CurrencyLocale.ja_JP, KES: exports.CurrencyLocale.sw_KE, KGS: exports.CurrencyLocale.ky_KG, KHR: exports.CurrencyLocale.km_KH, KMF: exports.CurrencyLocale.ar_KM, KPW: exports.CurrencyLocale.ko_KP, KRW: exports.CurrencyLocale.ko_KR, KWD: exports.CurrencyLocale.ar_KW, KYD: exports.CurrencyLocale.en_KY, KZT: exports.CurrencyLocale.kk_KZ, LAK: exports.CurrencyLocale.lo_LA, LBP: exports.CurrencyLocale.ar_LB, LKR: exports.CurrencyLocale.si_LK, LRD: exports.CurrencyLocale.en_LR, LSL: exports.CurrencyLocale.st_LS, LTL: exports.CurrencyLocale.lt_LT, LVL: exports.CurrencyLocale.lv_LV, LYD: exports.CurrencyLocale.ar_LY, MAD: exports.CurrencyLocale.ar_MA, MDL: exports.CurrencyLocale.ro_MD, MGA: exports.CurrencyLocale.mg_MG, MKD: exports.CurrencyLocale.mk_MK, MMK: exports.CurrencyLocale.my_MM, MNT: exports.CurrencyLocale.mn_MN, MOP: exports.CurrencyLocale.zh_MO, MRO: exports.CurrencyLocale.ar_MR, MUR: exports.CurrencyLocale.en_MU, MVR: exports.CurrencyLocale.dv_MV, MWK: exports.CurrencyLocale.ny_MW, MXN: exports.CurrencyLocale.es_MX, MXV: exports.CurrencyLocale.es_MX, MYR: exports.CurrencyLocale.ms_MY, MZN: exports.CurrencyLocale.pt_MZ, NAD: exports.CurrencyLocale.af_NA, NGN: exports.CurrencyLocale.ig_NG, NIO: exports.CurrencyLocale.es_NI, NOK: exports.CurrencyLocale.nb_NO, NPR: exports.CurrencyLocale.ne_NP, NZD: exports.CurrencyLocale.en_NZ, OMR: exports.CurrencyLocale.ar_OM, PAB: exports.CurrencyLocale.es_PA, PEN: exports.CurrencyLocale.es_PE, PGK: exports.CurrencyLocale.en_PG, PHP: exports.CurrencyLocale.en_PH, PKR: exports.CurrencyLocale.ur_PK, PLN: exports.CurrencyLocale.pl_PL, PYG: exports.CurrencyLocale.es_PY, QAR: exports.CurrencyLocale.ar_QA, RON: exports.CurrencyLocale.ro_RO, RSD: exports.CurrencyLocale.sr_RS, RUB: exports.CurrencyLocale.ru_RU, RWF: exports.CurrencyLocale.rw_RW, SAR: exports.CurrencyLocale.ar_SA, SBD: exports.CurrencyLocale.en_SB, SCR: exports.CurrencyLocale.en_SC, SDG: exports.CurrencyLocale.ar_SD, SEK: exports.CurrencyLocale.sv_SE, SGD: exports.CurrencyLocale.en_SG, SHP: exports.CurrencyLocale.en_SH, SLL: exports.CurrencyLocale.en_SL, SOS: exports.CurrencyLocale.so_SO, SRD: exports.CurrencyLocale.nl_SR, SSP: exports.CurrencyLocale.en_SS, STD: exports.CurrencyLocale.pt_ST, SYP: exports.CurrencyLocale.ar_SY, SZL: exports.CurrencyLocale.ss_SZ, THB: exports.CurrencyLocale.th_TH, TJS: exports.CurrencyLocale.tg_TJ, TMT: exports.CurrencyLocale.tk_TM, TND: exports.CurrencyLocale.ar_TN, TOP: exports.CurrencyLocale.to_TO, TRY: exports.CurrencyLocale.tr_TR, TTD: exports.CurrencyLocale.en_TT, TWD: exports.CurrencyLocale.zh_TW, TZS: exports.CurrencyLocale.sw_TZ, UAH: exports.CurrencyLocale.uk_UA, UGX: exports.CurrencyLocale.sw_UG, USD: exports.CurrencyLocale.en_US, USN: exports.CurrencyLocale.en_US, USS: exports.CurrencyLocale.en_US, UYI: exports.CurrencyLocale.es_UY, UYU: exports.CurrencyLocale.es_UY, UZS: exports.CurrencyLocale.uz_UZ, VEF: exports.CurrencyLocale.es_VE, VND: exports.CurrencyLocale.vi_VN, VUV: exports.CurrencyLocale.en_VU, WST: exports.CurrencyLocale.sm_WS, XAF: exports.CurrencyLocale.fr_CM, XAG: exports.CurrencyLocale.en, XAU: exports.CurrencyLocale.en, XBA: exports.CurrencyLocale.en, XBB: exports.CurrencyLocale.en, XBC: exports.CurrencyLocale.en, XBD: exports.CurrencyLocale.en, XCD: exports.CurrencyLocale.en_VC, XDR: exports.CurrencyLocale.en, XFU: exports.CurrencyLocale.en, XOF: exports.CurrencyLocale.fr_BJ, XPD: exports.CurrencyLocale.en, XPF: exports.CurrencyLocale.fr_PF, XPT: exports.CurrencyLocale.en, XTS: exports.CurrencyLocale.en, XXX: exports.CurrencyLocale.en, YER: exports.CurrencyLocale.ar_YE, ZAR: exports.CurrencyLocale.zu_ZA, ZMW: exports.CurrencyLocale.en_ZM };
  exports.CurrencyCodeLocale = a, exports.CurrencyLocaleCode = C, exports.getAllCodes = () => Object.keys(exports.CurrencyName), exports.getAllCountries = () => Object.values(exports.CurrencyCountry), exports.getAllLocales = () => Object.keys(C), exports.getAllNames = () => Object.values(exports.CurrencyName), exports.getAllSymbols = () => Object.values(exports.CurrencySymbol), exports.getCurrencyCountry = (e2) => exports.CurrencyCountry[e2], exports.getCurrencyLocaleCode = (e2) => C[e2], exports.getCurrencyName = (e2) => exports.CurrencyName[e2], exports.getCurrencyObject = (e2) => {
    if (!(Object.keys(exports.CurrencyName).includes(e2) && Object.keys(exports.CurrencySymbol).includes(e2) && Object.keys(a).includes(e2) && Object.keys(exports.CurrencyCountry).includes(e2)))
      throw new Error("Invalid currency code");
    return { name: exports.CurrencyName[e2], symbol: exports.CurrencySymbol[e2], locale: a[e2], country: exports.CurrencyCountry[e2] };
  }, exports.getCurrencySymbol = (e2) => exports.CurrencySymbol[e2], exports.getCurrencySymbolByCountry = (e2) => {
    if (!Object.values(exports.CurrencyCountry).includes(e2))
      return "";
    let r2 = "";
    for (const o2 in exports.CurrencyCountry)
      if (exports.CurrencyCountry[o2] === e2) {
        r2 = exports.CurrencySymbol[o2];
        break;
      }
    return r2;
  }, exports.getCurrencySymbolByLocale = (e2) => {
    const r2 = C[e2];
    if (!Array.isArray(r2))
      return exports.CurrencySymbol[r2];
    const o2 = [];
    for (const e3 of r2)
      o2.push(exports.CurrencySymbol[e3]);
    return o2;
  };
});

// node_modules/fast-xml-parser/src/util.js
var require_util = __commonJS((exports) => {
  var nameStartChar = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
  var nameChar = nameStartChar + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
  var nameRegexp = "[" + nameStartChar + "][" + nameChar + "]*";
  var regexName = new RegExp("^" + nameRegexp + "$");
  var getAllMatches = function(string, regex) {
    const matches = [];
    let match = regex.exec(string);
    while (match) {
      const allmatches = [];
      allmatches.startIndex = regex.lastIndex - match[0].length;
      const len = match.length;
      for (let index = 0;index < len; index++) {
        allmatches.push(match[index]);
      }
      matches.push(allmatches);
      match = regex.exec(string);
    }
    return matches;
  };
  var isName = function(string) {
    const match = regexName.exec(string);
    return !(match === null || typeof match === "undefined");
  };
  exports.isExist = function(v) {
    return typeof v !== "undefined";
  };
  exports.isEmptyObject = function(obj) {
    return Object.keys(obj).length === 0;
  };
  exports.merge = function(target, a, arrayMode) {
    if (a) {
      const keys = Object.keys(a);
      const len = keys.length;
      for (let i = 0;i < len; i++) {
        if (arrayMode === "strict") {
          target[keys[i]] = [a[keys[i]]];
        } else {
          target[keys[i]] = a[keys[i]];
        }
      }
    }
  };
  exports.getValue = function(v) {
    if (exports.isExist(v)) {
      return v;
    } else {
      return "";
    }
  };
  exports.isName = isName;
  exports.getAllMatches = getAllMatches;
  exports.nameRegexp = nameRegexp;
});

// node_modules/fast-xml-parser/src/validator.js
var require_validator = __commonJS((exports) => {
  var isWhiteSpace = function(char) {
    return char === " " || char === "\t" || char === "\n" || char === "\r";
  };
  var readPI = function(xmlData, i) {
    const start = i;
    for (;i < xmlData.length; i++) {
      if (xmlData[i] == "?" || xmlData[i] == " ") {
        const tagname = xmlData.substr(start, i - start);
        if (i > 5 && tagname === "xml") {
          return getErrorObject("InvalidXml", "XML declaration allowed only at the start of the document.", getLineNumberForPosition(xmlData, i));
        } else if (xmlData[i] == "?" && xmlData[i + 1] == ">") {
          i++;
          break;
        } else {
          continue;
        }
      }
    }
    return i;
  };
  var readCommentAndCDATA = function(xmlData, i) {
    if (xmlData.length > i + 5 && xmlData[i + 1] === "-" && xmlData[i + 2] === "-") {
      for (i += 3;i < xmlData.length; i++) {
        if (xmlData[i] === "-" && xmlData[i + 1] === "-" && xmlData[i + 2] === ">") {
          i += 2;
          break;
        }
      }
    } else if (xmlData.length > i + 8 && xmlData[i + 1] === "D" && xmlData[i + 2] === "O" && xmlData[i + 3] === "C" && xmlData[i + 4] === "T" && xmlData[i + 5] === "Y" && xmlData[i + 6] === "P" && xmlData[i + 7] === "E") {
      let angleBracketsCount = 1;
      for (i += 8;i < xmlData.length; i++) {
        if (xmlData[i] === "<") {
          angleBracketsCount++;
        } else if (xmlData[i] === ">") {
          angleBracketsCount--;
          if (angleBracketsCount === 0) {
            break;
          }
        }
      }
    } else if (xmlData.length > i + 9 && xmlData[i + 1] === "[" && xmlData[i + 2] === "C" && xmlData[i + 3] === "D" && xmlData[i + 4] === "A" && xmlData[i + 5] === "T" && xmlData[i + 6] === "A" && xmlData[i + 7] === "[") {
      for (i += 8;i < xmlData.length; i++) {
        if (xmlData[i] === "]" && xmlData[i + 1] === "]" && xmlData[i + 2] === ">") {
          i += 2;
          break;
        }
      }
    }
    return i;
  };
  var readAttributeStr = function(xmlData, i) {
    let attrStr = "";
    let startChar = "";
    let tagClosed = false;
    for (;i < xmlData.length; i++) {
      if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
        if (startChar === "") {
          startChar = xmlData[i];
        } else if (startChar !== xmlData[i]) {
        } else {
          startChar = "";
        }
      } else if (xmlData[i] === ">") {
        if (startChar === "") {
          tagClosed = true;
          break;
        }
      }
      attrStr += xmlData[i];
    }
    if (startChar !== "") {
      return false;
    }
    return {
      value: attrStr,
      index: i,
      tagClosed
    };
  };
  var validateAttributeString = function(attrStr, options) {
    const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
    const attrNames = {};
    for (let i = 0;i < matches.length; i++) {
      if (matches[i][1].length === 0) {
        return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' has no space in starting.", getPositionFromMatch(matches[i]));
      } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
        return getErrorObject("InvalidAttr", "Attribute '" + matches[i][2] + "' is without value.", getPositionFromMatch(matches[i]));
      } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
        return getErrorObject("InvalidAttr", "boolean attribute '" + matches[i][2] + "' is not allowed.", getPositionFromMatch(matches[i]));
      }
      const attrName = matches[i][2];
      if (!validateAttrName(attrName)) {
        return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is an invalid name.", getPositionFromMatch(matches[i]));
      }
      if (!attrNames.hasOwnProperty(attrName)) {
        attrNames[attrName] = 1;
      } else {
        return getErrorObject("InvalidAttr", "Attribute '" + attrName + "' is repeated.", getPositionFromMatch(matches[i]));
      }
    }
    return true;
  };
  var validateNumberAmpersand = function(xmlData, i) {
    let re = /\d/;
    if (xmlData[i] === "x") {
      i++;
      re = /[\da-fA-F]/;
    }
    for (;i < xmlData.length; i++) {
      if (xmlData[i] === ";")
        return i;
      if (!xmlData[i].match(re))
        break;
    }
    return -1;
  };
  var validateAmpersand = function(xmlData, i) {
    i++;
    if (xmlData[i] === ";")
      return -1;
    if (xmlData[i] === "#") {
      i++;
      return validateNumberAmpersand(xmlData, i);
    }
    let count = 0;
    for (;i < xmlData.length; i++, count++) {
      if (xmlData[i].match(/\w/) && count < 20)
        continue;
      if (xmlData[i] === ";")
        break;
      return -1;
    }
    return i;
  };
  var getErrorObject = function(code, message, lineNumber) {
    return {
      err: {
        code,
        msg: message,
        line: lineNumber.line || lineNumber,
        col: lineNumber.col
      }
    };
  };
  var validateAttrName = function(attrName) {
    return util.isName(attrName);
  };
  var validateTagName = function(tagname) {
    return util.isName(tagname);
  };
  var getLineNumberForPosition = function(xmlData, index) {
    const lines = xmlData.substring(0, index).split(/\r?\n/);
    return {
      line: lines.length,
      col: lines[lines.length - 1].length + 1
    };
  };
  var getPositionFromMatch = function(match) {
    return match.startIndex + match[1].length;
  };
  var util = require_util();
  var defaultOptions = {
    allowBooleanAttributes: false,
    unpairedTags: []
  };
  exports.validate = function(xmlData, options) {
    options = Object.assign({}, defaultOptions, options);
    const tags = [];
    let tagFound = false;
    let reachedRoot = false;
    if (xmlData[0] === "\uFEFF") {
      xmlData = xmlData.substr(1);
    }
    for (let i = 0;i < xmlData.length; i++) {
      if (xmlData[i] === "<" && xmlData[i + 1] === "?") {
        i += 2;
        i = readPI(xmlData, i);
        if (i.err)
          return i;
      } else if (xmlData[i] === "<") {
        let tagStartPos = i;
        i++;
        if (xmlData[i] === "!") {
          i = readCommentAndCDATA(xmlData, i);
          continue;
        } else {
          let closingTag = false;
          if (xmlData[i] === "/") {
            closingTag = true;
            i++;
          }
          let tagName = "";
          for (;i < xmlData.length && xmlData[i] !== ">" && xmlData[i] !== " " && xmlData[i] !== "\t" && xmlData[i] !== "\n" && xmlData[i] !== "\r"; i++) {
            tagName += xmlData[i];
          }
          tagName = tagName.trim();
          if (tagName[tagName.length - 1] === "/") {
            tagName = tagName.substring(0, tagName.length - 1);
            i--;
          }
          if (!validateTagName(tagName)) {
            let msg;
            if (tagName.trim().length === 0) {
              msg = "Invalid space after '<'.";
            } else {
              msg = "Tag '" + tagName + "' is an invalid name.";
            }
            return getErrorObject("InvalidTag", msg, getLineNumberForPosition(xmlData, i));
          }
          const result = readAttributeStr(xmlData, i);
          if (result === false) {
            return getErrorObject("InvalidAttr", "Attributes for '" + tagName + "' have open quote.", getLineNumberForPosition(xmlData, i));
          }
          let attrStr = result.value;
          i = result.index;
          if (attrStr[attrStr.length - 1] === "/") {
            const attrStrStart = i - attrStr.length;
            attrStr = attrStr.substring(0, attrStr.length - 1);
            const isValid = validateAttributeString(attrStr, options);
            if (isValid === true) {
              tagFound = true;
            } else {
              return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
            }
          } else if (closingTag) {
            if (!result.tagClosed) {
              return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
            } else if (attrStr.trim().length > 0) {
              return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
            } else if (tags.length === 0) {
              return getErrorObject("InvalidTag", "Closing tag '" + tagName + "' has not been opened.", getLineNumberForPosition(xmlData, tagStartPos));
            } else {
              const otg = tags.pop();
              if (tagName !== otg.tagName) {
                let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
                return getErrorObject("InvalidTag", "Expected closing tag '" + otg.tagName + "' (opened in line " + openPos.line + ", col " + openPos.col + ") instead of closing tag '" + tagName + "'.", getLineNumberForPosition(xmlData, tagStartPos));
              }
              if (tags.length == 0) {
                reachedRoot = true;
              }
            }
          } else {
            const isValid = validateAttributeString(attrStr, options);
            if (isValid !== true) {
              return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
            }
            if (reachedRoot === true) {
              return getErrorObject("InvalidXml", "Multiple possible root nodes found.", getLineNumberForPosition(xmlData, i));
            } else if (options.unpairedTags.indexOf(tagName) !== -1) {
            } else {
              tags.push({ tagName, tagStartPos });
            }
            tagFound = true;
          }
          for (i++;i < xmlData.length; i++) {
            if (xmlData[i] === "<") {
              if (xmlData[i + 1] === "!") {
                i++;
                i = readCommentAndCDATA(xmlData, i);
                continue;
              } else if (xmlData[i + 1] === "?") {
                i = readPI(xmlData, ++i);
                if (i.err)
                  return i;
              } else {
                break;
              }
            } else if (xmlData[i] === "&") {
              const afterAmp = validateAmpersand(xmlData, i);
              if (afterAmp == -1)
                return getErrorObject("InvalidChar", "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
              i = afterAmp;
            } else {
              if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
                return getErrorObject("InvalidXml", "Extra text at the end", getLineNumberForPosition(xmlData, i));
              }
            }
          }
          if (xmlData[i] === "<") {
            i--;
          }
        }
      } else {
        if (isWhiteSpace(xmlData[i])) {
          continue;
        }
        return getErrorObject("InvalidChar", "char '" + xmlData[i] + "' is not expected.", getLineNumberForPosition(xmlData, i));
      }
    }
    if (!tagFound) {
      return getErrorObject("InvalidXml", "Start tag expected.", 1);
    } else if (tags.length == 1) {
      return getErrorObject("InvalidTag", "Unclosed tag '" + tags[0].tagName + "'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
    } else if (tags.length > 0) {
      return getErrorObject("InvalidXml", "Invalid '" + JSON.stringify(tags.map((t) => t.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
    }
    return true;
  };
  var doubleQuote = '"';
  var singleQuote = "'";
  var validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', "g");
});

// node_modules/fast-xml-parser/src/xmlparser/OptionsBuilder.js
var require_OptionsBuilder = __commonJS((exports) => {
  var defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: "@_",
    attributesGroupName: false,
    textNodeName: "#text",
    ignoreAttributes: true,
    removeNSPrefix: false,
    allowBooleanAttributes: false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true,
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val2) {
      return val2;
    },
    attributeValueProcessor: function(attrName, val2) {
      return val2;
    },
    stopNodes: [],
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs) {
      return tagName;
    }
  };
  var buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
  };
  exports.buildOptions = buildOptions;
  exports.defaultOptions = defaultOptions;
});

// node_modules/fast-xml-parser/src/xmlparser/xmlNode.js
var require_xmlNode = __commonJS((exports, module) => {
  class XmlNode {
    constructor(tagname) {
      this.tagname = tagname;
      this.child = [];
      this[":@"] = {};
    }
    add(key, val2) {
      if (key === "__proto__")
        key = "#__proto__";
      this.child.push({ [key]: val2 });
    }
    addChild(node4) {
      if (node4.tagname === "__proto__")
        node4.tagname = "#__proto__";
      if (node4[":@"] && Object.keys(node4[":@"]).length > 0) {
        this.child.push({ [node4.tagname]: node4.child, [":@"]: node4[":@"] });
      } else {
        this.child.push({ [node4.tagname]: node4.child });
      }
    }
  }
  module.exports = XmlNode;
});

// node_modules/fast-xml-parser/src/xmlparser/DocTypeReader.js
var require_DocTypeReader = __commonJS((exports, module) => {
  var readDocType = function(xmlData, i) {
    const entities = {};
    if (xmlData[i + 3] === "O" && xmlData[i + 4] === "C" && xmlData[i + 5] === "T" && xmlData[i + 6] === "Y" && xmlData[i + 7] === "P" && xmlData[i + 8] === "E") {
      i = i + 9;
      let angleBracketsCount = 1;
      let hasBody = false, comment = false;
      let exp = "";
      for (;i < xmlData.length; i++) {
        if (xmlData[i] === "<" && !comment) {
          if (hasBody && isEntity(xmlData, i)) {
            i += 7;
            [entityName, val, i] = readEntityExp(xmlData, i + 1);
            if (val.indexOf("&") === -1)
              entities[validateEntityName(entityName)] = {
                regx: RegExp(`&${entityName};`, "g"),
                val
              };
          } else if (hasBody && isElement(xmlData, i))
            i += 8;
          else if (hasBody && isAttlist(xmlData, i))
            i += 8;
          else if (hasBody && isNotation(xmlData, i))
            i += 9;
          else if (isComment)
            comment = true;
          else
            throw new Error("Invalid DOCTYPE");
          angleBracketsCount++;
          exp = "";
        } else if (xmlData[i] === ">") {
          if (comment) {
            if (xmlData[i - 1] === "-" && xmlData[i - 2] === "-") {
              comment = false;
              angleBracketsCount--;
            }
          } else {
            angleBracketsCount--;
          }
          if (angleBracketsCount === 0) {
            break;
          }
        } else if (xmlData[i] === "[") {
          hasBody = true;
        } else {
          exp += xmlData[i];
        }
      }
      if (angleBracketsCount !== 0) {
        throw new Error(`Unclosed DOCTYPE`);
      }
    } else {
      throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return { entities, i };
  };
  var readEntityExp = function(xmlData, i) {
    let entityName2 = "";
    for (;i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"'); i++) {
      entityName2 += xmlData[i];
    }
    entityName2 = entityName2.trim();
    if (entityName2.indexOf(" ") !== -1)
      throw new Error("External entites are not supported");
    const startChar = xmlData[i++];
    let val2 = "";
    for (;i < xmlData.length && xmlData[i] !== startChar; i++) {
      val2 += xmlData[i];
    }
    return [entityName2, val2, i];
  };
  var isComment = function(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "-" && xmlData[i + 3] === "-")
      return true;
    return false;
  };
  var isEntity = function(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "N" && xmlData[i + 4] === "T" && xmlData[i + 5] === "I" && xmlData[i + 6] === "T" && xmlData[i + 7] === "Y")
      return true;
    return false;
  };
  var isElement = function(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "E" && xmlData[i + 3] === "L" && xmlData[i + 4] === "E" && xmlData[i + 5] === "M" && xmlData[i + 6] === "E" && xmlData[i + 7] === "N" && xmlData[i + 8] === "T")
      return true;
    return false;
  };
  var isAttlist = function(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "A" && xmlData[i + 3] === "T" && xmlData[i + 4] === "T" && xmlData[i + 5] === "L" && xmlData[i + 6] === "I" && xmlData[i + 7] === "S" && xmlData[i + 8] === "T")
      return true;
    return false;
  };
  var isNotation = function(xmlData, i) {
    if (xmlData[i + 1] === "!" && xmlData[i + 2] === "N" && xmlData[i + 3] === "O" && xmlData[i + 4] === "T" && xmlData[i + 5] === "A" && xmlData[i + 6] === "T" && xmlData[i + 7] === "I" && xmlData[i + 8] === "O" && xmlData[i + 9] === "N")
      return true;
    return false;
  };
  var validateEntityName = function(name) {
    if (util.isName(name))
      return name;
    else
      throw new Error(`Invalid entity name ${name}`);
  };
  var util = require_util();
  module.exports = readDocType;
});

// node_modules/strnum/strnum.js
var require_strnum = __commonJS((exports, module) => {
  var toNumber = function(str, options = {}) {
    options = Object.assign({}, consider, options);
    if (!str || typeof str !== "string")
      return str;
    let trimmedStr = str.trim();
    if (options.skipLike !== undefined && options.skipLike.test(trimmedStr))
      return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
      return Number.parseInt(trimmedStr, 16);
    } else {
      const match = numRegex.exec(trimmedStr);
      if (match) {
        const sign = match[1];
        const leadingZeros = match[2];
        let numTrimmedByZeros = trimZeros(match[3]);
        const eNotation = match[4] || match[6];
        if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
          return str;
        else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
          return str;
        else {
          const num = Number(trimmedStr);
          const numStr = "" + num;
          if (numStr.search(/[eE]/) !== -1) {
            if (options.eNotation)
              return num;
            else
              return str;
          } else if (eNotation) {
            if (options.eNotation)
              return num;
            else
              return str;
          } else if (trimmedStr.indexOf(".") !== -1) {
            if (numStr === "0" && numTrimmedByZeros === "")
              return num;
            else if (numStr === numTrimmedByZeros)
              return num;
            else if (sign && numStr === "-" + numTrimmedByZeros)
              return num;
            else
              return str;
          }
          if (leadingZeros) {
            if (numTrimmedByZeros === numStr)
              return num;
            else if (sign + numTrimmedByZeros === numStr)
              return num;
            else
              return str;
          }
          if (trimmedStr === numStr)
            return num;
          else if (trimmedStr === sign + numStr)
            return num;
          return str;
        }
      } else {
        return str;
      }
    }
  };
  var trimZeros = function(numStr) {
    if (numStr && numStr.indexOf(".") !== -1) {
      numStr = numStr.replace(/0+$/, "");
      if (numStr === ".")
        numStr = "0";
      else if (numStr[0] === ".")
        numStr = "0" + numStr;
      else if (numStr[numStr.length - 1] === ".")
        numStr = numStr.substr(0, numStr.length - 1);
      return numStr;
    }
    return numStr;
  };
  var hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
  var numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
  if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
  }
  if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
  }
  var consider = {
    hex: true,
    leadingZeros: true,
    decimalPoint: ".",
    eNotation: true
  };
  module.exports = toNumber;
});

// node_modules/fast-xml-parser/src/xmlparser/OrderedObjParser.js
var require_OrderedObjParser = __commonJS((exports, module) => {
  var addExternalEntities = function(externalEntities) {
    const entKeys = Object.keys(externalEntities);
    for (let i = 0;i < entKeys.length; i++) {
      const ent = entKeys[i];
      this.lastEntities[ent] = {
        regex: new RegExp("&" + ent + ";", "g"),
        val: externalEntities[ent]
      };
    }
  };
  var parseTextData = function(val2, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
    if (val2 !== undefined) {
      if (this.options.trimValues && !dontTrim) {
        val2 = val2.trim();
      }
      if (val2.length > 0) {
        if (!escapeEntities)
          val2 = this.replaceEntitiesValue(val2);
        const newval = this.options.tagValueProcessor(tagName, val2, jPath, hasAttributes, isLeafNode);
        if (newval === null || newval === undefined) {
          return val2;
        } else if (typeof newval !== typeof val2 || newval !== val2) {
          return newval;
        } else if (this.options.trimValues) {
          return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
        } else {
          const trimmedVal = val2.trim();
          if (trimmedVal === val2) {
            return parseValue(val2, this.options.parseTagValue, this.options.numberParseOptions);
          } else {
            return val2;
          }
        }
      }
    }
  };
  var resolveNameSpace = function(tagname) {
    if (this.options.removeNSPrefix) {
      const tags = tagname.split(":");
      const prefix = tagname.charAt(0) === "/" ? "/" : "";
      if (tags[0] === "xmlns") {
        return "";
      }
      if (tags.length === 2) {
        tagname = prefix + tags[1];
      }
    }
    return tagname;
  };
  var buildAttributesMap = function(attrStr, jPath, tagName) {
    if (!this.options.ignoreAttributes && typeof attrStr === "string") {
      const matches = util.getAllMatches(attrStr, attrsRegx);
      const len = matches.length;
      const attrs = {};
      for (let i = 0;i < len; i++) {
        const attrName = this.resolveNameSpace(matches[i][1]);
        let oldVal = matches[i][4];
        let aName = this.options.attributeNamePrefix + attrName;
        if (attrName.length) {
          if (this.options.transformAttributeName) {
            aName = this.options.transformAttributeName(aName);
          }
          if (aName === "__proto__")
            aName = "#__proto__";
          if (oldVal !== undefined) {
            if (this.options.trimValues) {
              oldVal = oldVal.trim();
            }
            oldVal = this.replaceEntitiesValue(oldVal);
            const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
            if (newVal === null || newVal === undefined) {
              attrs[aName] = oldVal;
            } else if (typeof newVal !== typeof oldVal || newVal !== oldVal) {
              attrs[aName] = newVal;
            } else {
              attrs[aName] = parseValue(oldVal, this.options.parseAttributeValue, this.options.numberParseOptions);
            }
          } else if (this.options.allowBooleanAttributes) {
            attrs[aName] = true;
          }
        }
      }
      if (!Object.keys(attrs).length) {
        return;
      }
      if (this.options.attributesGroupName) {
        const attrCollection = {};
        attrCollection[this.options.attributesGroupName] = attrs;
        return attrCollection;
      }
      return attrs;
    }
  };
  var addChild = function(currentNode, childNode, jPath) {
    const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"]);
    if (result === false) {
    } else if (typeof result === "string") {
      childNode.tagname = result;
      currentNode.addChild(childNode);
    } else {
      currentNode.addChild(childNode);
    }
  };
  var saveTextToParentTag = function(textData, currentNode, jPath, isLeafNode) {
    if (textData) {
      if (isLeafNode === undefined)
        isLeafNode = Object.keys(currentNode.child).length === 0;
      textData = this.parseTextData(textData, currentNode.tagname, jPath, false, currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false, isLeafNode);
      if (textData !== undefined && textData !== "")
        currentNode.add(this.options.textNodeName, textData);
      textData = "";
    }
    return textData;
  };
  var isItStopNode = function(stopNodes, jPath, currentTagName) {
    const allNodesExp = "*." + currentTagName;
    for (const stopNodePath in stopNodes) {
      const stopNodeExp = stopNodes[stopNodePath];
      if (allNodesExp === stopNodeExp || jPath === stopNodeExp)
        return true;
    }
    return false;
  };
  var tagExpWithClosingIndex = function(xmlData, i, closingChar = ">") {
    let attrBoundary;
    let tagExp = "";
    for (let index = i;index < xmlData.length; index++) {
      let ch = xmlData[index];
      if (attrBoundary) {
        if (ch === attrBoundary)
          attrBoundary = "";
      } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
      } else if (ch === closingChar[0]) {
        if (closingChar[1]) {
          if (xmlData[index + 1] === closingChar[1]) {
            return {
              data: tagExp,
              index
            };
          }
        } else {
          return {
            data: tagExp,
            index
          };
        }
      } else if (ch === "\t") {
        ch = " ";
      }
      tagExp += ch;
    }
  };
  var findClosingIndex = function(xmlData, str, i, errMsg) {
    const closingIndex = xmlData.indexOf(str, i);
    if (closingIndex === -1) {
      throw new Error(errMsg);
    } else {
      return closingIndex + str.length - 1;
    }
  };
  var readTagExp = function(xmlData, i, removeNSPrefix, closingChar = ">") {
    const result = tagExpWithClosingIndex(xmlData, i + 1, closingChar);
    if (!result)
      return;
    let tagExp = result.data;
    const closeIndex = result.index;
    const separatorIndex = tagExp.search(/\s/);
    let tagName = tagExp;
    let attrExpPresent = true;
    if (separatorIndex !== -1) {
      tagName = tagExp.substring(0, separatorIndex);
      tagExp = tagExp.substring(separatorIndex + 1).trimStart();
    }
    const rawTagName = tagName;
    if (removeNSPrefix) {
      const colonIndex = tagName.indexOf(":");
      if (colonIndex !== -1) {
        tagName = tagName.substr(colonIndex + 1);
        attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
      }
    }
    return {
      tagName,
      tagExp,
      closeIndex,
      attrExpPresent,
      rawTagName
    };
  };
  var readStopNodeData = function(xmlData, tagName, i) {
    const startIndex = i;
    let openTagCount = 1;
    for (;i < xmlData.length; i++) {
      if (xmlData[i] === "<") {
        if (xmlData[i + 1] === "/") {
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i + 2, closeIndex).trim();
          if (closeTagName === tagName) {
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i: closeIndex
              };
            }
          }
          i = closeIndex;
        } else if (xmlData[i + 1] === "?") {
          const closeIndex = findClosingIndex(xmlData, "?>", i + 1, "StopNode is not closed.");
          i = closeIndex;
        } else if (xmlData.substr(i + 1, 3) === "!--") {
          const closeIndex = findClosingIndex(xmlData, "-->", i + 3, "StopNode is not closed.");
          i = closeIndex;
        } else if (xmlData.substr(i + 1, 2) === "![") {
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i = closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, ">");
          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length - 1] !== "/") {
              openTagCount++;
            }
            i = tagData.closeIndex;
          }
        }
      }
    }
  };
  var parseValue = function(val2, shouldParse, options) {
    if (shouldParse && typeof val2 === "string") {
      const newval = val2.trim();
      if (newval === "true")
        return true;
      else if (newval === "false")
        return false;
      else
        return toNumber(val2, options);
    } else {
      if (util.isExist(val2)) {
        return val2;
      } else {
        return "";
      }
    }
  };
  var util = require_util();
  var xmlNode = require_xmlNode();
  var readDocType = require_DocTypeReader();
  var toNumber = require_strnum();

  class OrderedObjParser {
    constructor(options) {
      this.options = options;
      this.currentNode = null;
      this.tagsNodeStack = [];
      this.docTypeEntities = {};
      this.lastEntities = {
        apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
        gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
        lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
        quot: { regex: /&(quot|#34|#x22);/g, val: "\"" }
      };
      this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" };
      this.htmlEntities = {
        space: { regex: /&(nbsp|#160);/g, val: " " },
        cent: { regex: /&(cent|#162);/g, val: "\xA2" },
        pound: { regex: /&(pound|#163);/g, val: "\xA3" },
        yen: { regex: /&(yen|#165);/g, val: "\xA5" },
        euro: { regex: /&(euro|#8364);/g, val: "\u20AC" },
        copyright: { regex: /&(copy|#169);/g, val: "\xA9" },
        reg: { regex: /&(reg|#174);/g, val: "\xAE" },
        inr: { regex: /&(inr|#8377);/g, val: "\u20B9" },
        num_dec: { regex: /&#([0-9]{1,7});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 10)) },
        num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (_, str) => String.fromCharCode(Number.parseInt(str, 16)) }
      };
      this.addExternalEntities = addExternalEntities;
      this.parseXml = parseXml;
      this.parseTextData = parseTextData;
      this.resolveNameSpace = resolveNameSpace;
      this.buildAttributesMap = buildAttributesMap;
      this.isItStopNode = isItStopNode;
      this.replaceEntitiesValue = replaceEntitiesValue;
      this.readStopNodeData = readStopNodeData;
      this.saveTextToParentTag = saveTextToParentTag;
      this.addChild = addChild;
    }
  }
  var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', "gm");
  var parseXml = function(xmlData) {
    xmlData = xmlData.replace(/\r\n?/g, "\n");
    const xmlObj = new xmlNode("!xml");
    let currentNode = xmlObj;
    let textData = "";
    let jPath = "";
    for (let i = 0;i < xmlData.length; i++) {
      const ch = xmlData[i];
      if (ch === "<") {
        if (xmlData[i + 1] === "/") {
          const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.");
          let tagName = xmlData.substring(i + 2, closeIndex).trim();
          if (this.options.removeNSPrefix) {
            const colonIndex = tagName.indexOf(":");
            if (colonIndex !== -1) {
              tagName = tagName.substr(colonIndex + 1);
            }
          }
          if (this.options.transformTagName) {
            tagName = this.options.transformTagName(tagName);
          }
          if (currentNode) {
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
          }
          const lastTagName = jPath.substring(jPath.lastIndexOf(".") + 1);
          if (tagName && this.options.unpairedTags.indexOf(tagName) !== -1) {
            throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
          }
          let propIndex = 0;
          if (lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1) {
            propIndex = jPath.lastIndexOf(".", jPath.lastIndexOf(".") - 1);
            this.tagsNodeStack.pop();
          } else {
            propIndex = jPath.lastIndexOf(".");
          }
          jPath = jPath.substring(0, propIndex);
          currentNode = this.tagsNodeStack.pop();
          textData = "";
          i = closeIndex;
        } else if (xmlData[i + 1] === "?") {
          let tagData = readTagExp(xmlData, i, false, "?>");
          if (!tagData)
            throw new Error("Pi Tag is not closed.");
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          if (this.options.ignoreDeclaration && tagData.tagName === "?xml" || this.options.ignorePiTags) {
          } else {
            const childNode = new xmlNode(tagData.tagName);
            childNode.add(this.options.textNodeName, "");
            if (tagData.tagName !== tagData.tagExp && tagData.attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
            }
            this.addChild(currentNode, childNode, jPath);
          }
          i = tagData.closeIndex + 1;
        } else if (xmlData.substr(i + 1, 3) === "!--") {
          const endIndex = findClosingIndex(xmlData, "-->", i + 4, "Comment is not closed.");
          if (this.options.commentPropName) {
            const comment = xmlData.substring(i + 4, endIndex - 2);
            textData = this.saveTextToParentTag(textData, currentNode, jPath);
            currentNode.add(this.options.commentPropName, [{ [this.options.textNodeName]: comment }]);
          }
          i = endIndex;
        } else if (xmlData.substr(i + 1, 2) === "!D") {
          const result = readDocType(xmlData, i);
          this.docTypeEntities = result.entities;
          i = result.i;
        } else if (xmlData.substr(i + 1, 2) === "![") {
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
          const tagExp = xmlData.substring(i + 9, closeIndex);
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
          let val2 = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true, true);
          if (val2 == undefined)
            val2 = "";
          if (this.options.cdataPropName) {
            currentNode.add(this.options.cdataPropName, [{ [this.options.textNodeName]: tagExp }]);
          } else {
            currentNode.add(this.options.textNodeName, val2);
          }
          i = closeIndex + 2;
        } else {
          let result = readTagExp(xmlData, i, this.options.removeNSPrefix);
          let tagName = result.tagName;
          const rawTagName = result.rawTagName;
          let tagExp = result.tagExp;
          let attrExpPresent = result.attrExpPresent;
          let closeIndex = result.closeIndex;
          if (this.options.transformTagName) {
            tagName = this.options.transformTagName(tagName);
          }
          if (currentNode && textData) {
            if (currentNode.tagname !== "!xml") {
              textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
            }
          }
          const lastTag = currentNode;
          if (lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1) {
            currentNode = this.tagsNodeStack.pop();
            jPath = jPath.substring(0, jPath.lastIndexOf("."));
          }
          if (tagName !== xmlObj.tagname) {
            jPath += jPath ? "." + tagName : tagName;
          }
          if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) {
            let tagContent = "";
            if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substr(0, tagName.length - 1);
                jPath = jPath.substr(0, jPath.length - 1);
                tagExp = tagName;
              } else {
                tagExp = tagExp.substr(0, tagExp.length - 1);
              }
              i = result.closeIndex;
            } else if (this.options.unpairedTags.indexOf(tagName) !== -1) {
              i = result.closeIndex;
            } else {
              const result2 = this.readStopNodeData(xmlData, rawTagName, closeIndex + 1);
              if (!result2)
                throw new Error(`Unexpected end of ${rawTagName}`);
              i = result2.i;
              tagContent = result2.tagContent;
            }
            const childNode = new xmlNode(tagName);
            if (tagName !== tagExp && attrExpPresent) {
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            if (tagContent) {
              tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
            }
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
            childNode.add(this.options.textNodeName, tagContent);
            this.addChild(currentNode, childNode, jPath);
          } else {
            if (tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1) {
              if (tagName[tagName.length - 1] === "/") {
                tagName = tagName.substr(0, tagName.length - 1);
                jPath = jPath.substr(0, jPath.length - 1);
                tagExp = tagName;
              } else {
                tagExp = tagExp.substr(0, tagExp.length - 1);
              }
              if (this.options.transformTagName) {
                tagName = this.options.transformTagName(tagName);
              }
              const childNode = new xmlNode(tagName);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              this.addChild(currentNode, childNode, jPath);
              jPath = jPath.substr(0, jPath.lastIndexOf("."));
            } else {
              const childNode = new xmlNode(tagName);
              this.tagsNodeStack.push(currentNode);
              if (tagName !== tagExp && attrExpPresent) {
                childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
              }
              this.addChild(currentNode, childNode, jPath);
              currentNode = childNode;
            }
            textData = "";
            i = closeIndex;
          }
        }
      } else {
        textData += xmlData[i];
      }
    }
    return xmlObj.child;
  };
  var replaceEntitiesValue = function(val2) {
    if (this.options.processEntities) {
      for (let entityName2 in this.docTypeEntities) {
        const entity = this.docTypeEntities[entityName2];
        val2 = val2.replace(entity.regx, entity.val);
      }
      for (let entityName2 in this.lastEntities) {
        const entity = this.lastEntities[entityName2];
        val2 = val2.replace(entity.regex, entity.val);
      }
      if (this.options.htmlEntities) {
        for (let entityName2 in this.htmlEntities) {
          const entity = this.htmlEntities[entityName2];
          val2 = val2.replace(entity.regex, entity.val);
        }
      }
      val2 = val2.replace(this.ampEntity.regex, this.ampEntity.val);
    }
    return val2;
  };
  module.exports = OrderedObjParser;
});

// node_modules/fast-xml-parser/src/xmlparser/node2json.js
var require_node2json = __commonJS((exports) => {
  var prettify = function(node4, options) {
    return compress(node4, options);
  };
  var compress = function(arr, options, jPath) {
    let text;
    const compressedObj = {};
    for (let i = 0;i < arr.length; i++) {
      const tagObj = arr[i];
      const property = propName(tagObj);
      let newJpath = "";
      if (jPath === undefined)
        newJpath = property;
      else
        newJpath = jPath + "." + property;
      if (property === options.textNodeName) {
        if (text === undefined)
          text = tagObj[property];
        else
          text += "" + tagObj[property];
      } else if (property === undefined) {
        continue;
      } else if (tagObj[property]) {
        let val2 = compress(tagObj[property], options, newJpath);
        const isLeaf = isLeafTag(val2, options);
        if (tagObj[":@"]) {
          assignAttributes(val2, tagObj[":@"], newJpath, options);
        } else if (Object.keys(val2).length === 1 && val2[options.textNodeName] !== undefined && !options.alwaysCreateTextNode) {
          val2 = val2[options.textNodeName];
        } else if (Object.keys(val2).length === 0) {
          if (options.alwaysCreateTextNode)
            val2[options.textNodeName] = "";
          else
            val2 = "";
        }
        if (compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
          if (!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [compressedObj[property]];
          }
          compressedObj[property].push(val2);
        } else {
          if (options.isArray(property, newJpath, isLeaf)) {
            compressedObj[property] = [val2];
          } else {
            compressedObj[property] = val2;
          }
        }
      }
    }
    if (typeof text === "string") {
      if (text.length > 0)
        compressedObj[options.textNodeName] = text;
    } else if (text !== undefined)
      compressedObj[options.textNodeName] = text;
    return compressedObj;
  };
  var propName = function(obj) {
    const keys = Object.keys(obj);
    for (let i = 0;i < keys.length; i++) {
      const key = keys[i];
      if (key !== ":@")
        return key;
    }
  };
  var assignAttributes = function(obj, attrMap, jpath, options) {
    if (attrMap) {
      const keys = Object.keys(attrMap);
      const len = keys.length;
      for (let i = 0;i < len; i++) {
        const atrrName = keys[i];
        if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
          obj[atrrName] = [attrMap[atrrName]];
        } else {
          obj[atrrName] = attrMap[atrrName];
        }
      }
    }
  };
  var isLeafTag = function(obj, options) {
    const { textNodeName } = options;
    const propCount = Object.keys(obj).length;
    if (propCount === 0) {
      return true;
    }
    if (propCount === 1 && (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)) {
      return true;
    }
    return false;
  };
  exports.prettify = prettify;
});

// node_modules/fast-xml-parser/src/xmlparser/XMLParser.js
var require_XMLParser = __commonJS((exports, module) => {
  var { buildOptions } = require_OptionsBuilder();
  var OrderedObjParser = require_OrderedObjParser();
  var { prettify } = require_node2json();
  var validator = require_validator();

  class XMLParser {
    constructor(options) {
      this.externalEntities = {};
      this.options = buildOptions(options);
    }
    parse(xmlData, validationOption) {
      if (typeof xmlData === "string") {
      } else if (xmlData.toString) {
        xmlData = xmlData.toString();
      } else {
        throw new Error("XML data is accepted in String or Bytes[] form.");
      }
      if (validationOption) {
        if (validationOption === true)
          validationOption = {};
        const result = validator.validate(xmlData, validationOption);
        if (result !== true) {
          throw Error(`${result.err.msg}:${result.err.line}:${result.err.col}`);
        }
      }
      const orderedObjParser = new OrderedObjParser(this.options);
      orderedObjParser.addExternalEntities(this.externalEntities);
      const orderedResult = orderedObjParser.parseXml(xmlData);
      if (this.options.preserveOrder || orderedResult === undefined)
        return orderedResult;
      else
        return prettify(orderedResult, this.options);
    }
    addEntity(key, value) {
      if (value.indexOf("&") !== -1) {
        throw new Error("Entity value can't have '&'");
      } else if (key.indexOf("&") !== -1 || key.indexOf(";") !== -1) {
        throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
      } else if (value === "&") {
        throw new Error("An entity with value '&' is not permitted");
      } else {
        this.externalEntities[key] = value;
      }
    }
  }
  module.exports = XMLParser;
});

// node_modules/fast-xml-parser/src/xmlbuilder/orderedJs2Xml.js
var require_orderedJs2Xml = __commonJS((exports, module) => {
  var toXml = function(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
      indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
  };
  var arrToStr = function(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;
    for (let i = 0;i < arr.length; i++) {
      const tagObj = arr[i];
      const tagName = propName(tagObj);
      if (tagName === undefined)
        continue;
      let newJPath = "";
      if (jPath.length === 0)
        newJPath = tagName;
      else
        newJPath = `${jPath}.${tagName}`;
      if (tagName === options.textNodeName) {
        let tagText = tagObj[tagName];
        if (!isStopNode(newJPath, options)) {
          tagText = options.tagValueProcessor(tagName, tagText);
          tagText = replaceEntitiesValue(tagText, options);
        }
        if (isPreviousElementTag) {
          xmlStr += indentation;
        }
        xmlStr += tagText;
        isPreviousElementTag = false;
        continue;
      } else if (tagName === options.cdataPropName) {
        if (isPreviousElementTag) {
          xmlStr += indentation;
        }
        xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
        isPreviousElementTag = false;
        continue;
      } else if (tagName === options.commentPropName) {
        xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
        isPreviousElementTag = true;
        continue;
      } else if (tagName[0] === "?") {
        const attStr2 = attr_to_str(tagObj[":@"], options);
        const tempInd = tagName === "?xml" ? "" : indentation;
        let piTextNodeName = tagObj[tagName][0][options.textNodeName];
        piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : "";
        xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr2}?>`;
        isPreviousElementTag = true;
        continue;
      }
      let newIdentation = indentation;
      if (newIdentation !== "") {
        newIdentation += options.indentBy;
      }
      const attStr = attr_to_str(tagObj[":@"], options);
      const tagStart = indentation + `<${tagName}${attStr}`;
      const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
      if (options.unpairedTags.indexOf(tagName) !== -1) {
        if (options.suppressUnpairedNode)
          xmlStr += tagStart + ">";
        else
          xmlStr += tagStart + "/>";
      } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
        xmlStr += tagStart + "/>";
      } else if (tagValue && tagValue.endsWith(">")) {
        xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
      } else {
        xmlStr += tagStart + ">";
        if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
          xmlStr += indentation + options.indentBy + tagValue + indentation;
        } else {
          xmlStr += tagValue;
        }
        xmlStr += `</${tagName}>`;
      }
      isPreviousElementTag = true;
    }
    return xmlStr;
  };
  var propName = function(obj) {
    const keys = Object.keys(obj);
    for (let i = 0;i < keys.length; i++) {
      const key = keys[i];
      if (!obj.hasOwnProperty(key))
        continue;
      if (key !== ":@")
        return key;
    }
  };
  var attr_to_str = function(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
      for (let attr in attrMap) {
        if (!attrMap.hasOwnProperty(attr))
          continue;
        let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
        attrVal = replaceEntitiesValue(attrVal, options);
        if (attrVal === true && options.suppressBooleanAttributes) {
          attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
        } else {
          attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
        }
      }
    }
    return attrStr;
  };
  var isStopNode = function(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
      if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName)
        return true;
    }
    return false;
  };
  var replaceEntitiesValue = function(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
      for (let i = 0;i < options.entities.length; i++) {
        const entity = options.entities[i];
        textValue = textValue.replace(entity.regex, entity.val);
      }
    }
    return textValue;
  };
  var EOL = "\n";
  module.exports = toXml;
});

// node_modules/fast-xml-parser/src/xmlbuilder/json2xml.js
var require_json2xml = __commonJS((exports, module) => {
  var Builder = function(options) {
    this.options = Object.assign({}, defaultOptions, options);
    if (this.options.ignoreAttributes || this.options.attributesGroupName) {
      this.isAttribute = function() {
        return false;
      };
    } else {
      this.attrPrefixLen = this.options.attributeNamePrefix.length;
      this.isAttribute = isAttribute;
    }
    this.processTextOrObjNode = processTextOrObjNode;
    if (this.options.format) {
      this.indentate = indentate;
      this.tagEndChar = ">\n";
      this.newLine = "\n";
    } else {
      this.indentate = function() {
        return "";
      };
      this.tagEndChar = ">";
      this.newLine = "";
    }
  };
  var processTextOrObjNode = function(object, key, level) {
    const result = this.j2x(object, level + 1);
    if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
      return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
    } else {
      return this.buildObjectNode(result.val, key, result.attrStr, level);
    }
  };
  var indentate = function(level) {
    return this.options.indentBy.repeat(level);
  };
  var isAttribute = function(name) {
    if (name.startsWith(this.options.attributeNamePrefix) && name !== this.options.textNodeName) {
      return name.substr(this.attrPrefixLen);
    } else {
      return false;
    }
  };
  var buildFromOrderedJs = require_orderedJs2Xml();
  var defaultOptions = {
    attributeNamePrefix: "@_",
    attributesGroupName: false,
    textNodeName: "#text",
    ignoreAttributes: true,
    cdataPropName: false,
    format: false,
    indentBy: "  ",
    suppressEmptyNode: false,
    suppressUnpairedNode: true,
    suppressBooleanAttributes: true,
    tagValueProcessor: function(key, a) {
      return a;
    },
    attributeValueProcessor: function(attrName, a) {
      return a;
    },
    preserveOrder: false,
    commentPropName: false,
    unpairedTags: [],
    entities: [
      { regex: new RegExp("&", "g"), val: "&amp;" },
      { regex: new RegExp(">", "g"), val: "&gt;" },
      { regex: new RegExp("<", "g"), val: "&lt;" },
      { regex: new RegExp("\'", "g"), val: "&apos;" },
      { regex: new RegExp("\"", "g"), val: "&quot;" }
    ],
    processEntities: true,
    stopNodes: [],
    oneListGroup: false
  };
  Builder.prototype.build = function(jObj) {
    if (this.options.preserveOrder) {
      return buildFromOrderedJs(jObj, this.options);
    } else {
      if (Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1) {
        jObj = {
          [this.options.arrayNodeName]: jObj
        };
      }
      return this.j2x(jObj, 0).val;
    }
  };
  Builder.prototype.j2x = function(jObj, level) {
    let attrStr = "";
    let val2 = "";
    for (let key in jObj) {
      if (!Object.prototype.hasOwnProperty.call(jObj, key))
        continue;
      if (typeof jObj[key] === "undefined") {
        if (this.isAttribute(key)) {
          val2 += "";
        }
      } else if (jObj[key] === null) {
        if (this.isAttribute(key)) {
          val2 += "";
        } else if (key[0] === "?") {
          val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
        } else {
          val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
        }
      } else if (jObj[key] instanceof Date) {
        val2 += this.buildTextValNode(jObj[key], key, "", level);
      } else if (typeof jObj[key] !== "object") {
        const attr = this.isAttribute(key);
        if (attr) {
          attrStr += this.buildAttrPairStr(attr, "" + jObj[key]);
        } else {
          if (key === this.options.textNodeName) {
            let newval = this.options.tagValueProcessor(key, "" + jObj[key]);
            val2 += this.replaceEntitiesValue(newval);
          } else {
            val2 += this.buildTextValNode(jObj[key], key, "", level);
          }
        }
      } else if (Array.isArray(jObj[key])) {
        const arrLen = jObj[key].length;
        let listTagVal = "";
        for (let j = 0;j < arrLen; j++) {
          const item = jObj[key][j];
          if (typeof item === "undefined") {
          } else if (item === null) {
            if (key[0] === "?")
              val2 += this.indentate(level) + "<" + key + "?" + this.tagEndChar;
            else
              val2 += this.indentate(level) + "<" + key + "/" + this.tagEndChar;
          } else if (typeof item === "object") {
            if (this.options.oneListGroup) {
              listTagVal += this.j2x(item, level + 1).val;
            } else {
              listTagVal += this.processTextOrObjNode(item, key, level);
            }
          } else {
            listTagVal += this.buildTextValNode(item, key, "", level);
          }
        }
        if (this.options.oneListGroup) {
          listTagVal = this.buildObjectNode(listTagVal, key, "", level);
        }
        val2 += listTagVal;
      } else {
        if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
          const Ks = Object.keys(jObj[key]);
          const L = Ks.length;
          for (let j = 0;j < L; j++) {
            attrStr += this.buildAttrPairStr(Ks[j], "" + jObj[key][Ks[j]]);
          }
        } else {
          val2 += this.processTextOrObjNode(jObj[key], key, level);
        }
      }
    }
    return { attrStr, val: val2 };
  };
  Builder.prototype.buildAttrPairStr = function(attrName, val2) {
    val2 = this.options.attributeValueProcessor(attrName, "" + val2);
    val2 = this.replaceEntitiesValue(val2);
    if (this.options.suppressBooleanAttributes && val2 === "true") {
      return " " + attrName;
    } else
      return " " + attrName + '="' + val2 + '"';
  };
  Builder.prototype.buildObjectNode = function(val2, key, attrStr, level) {
    if (val2 === "") {
      if (key[0] === "?")
        return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
      else {
        return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
      }
    } else {
      let tagEndExp = "</" + key + this.tagEndChar;
      let piClosingChar = "";
      if (key[0] === "?") {
        piClosingChar = "?";
        tagEndExp = "";
      }
      if ((attrStr || attrStr === "") && val2.indexOf("<") === -1) {
        return this.indentate(level) + "<" + key + attrStr + piClosingChar + ">" + val2 + tagEndExp;
      } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
        return this.indentate(level) + `<!--${val2}-->` + this.newLine;
      } else {
        return this.indentate(level) + "<" + key + attrStr + piClosingChar + this.tagEndChar + val2 + this.indentate(level) + tagEndExp;
      }
    }
  };
  Builder.prototype.closeTag = function(key) {
    let closeTag = "";
    if (this.options.unpairedTags.indexOf(key) !== -1) {
      if (!this.options.suppressUnpairedNode)
        closeTag = "/";
    } else if (this.options.suppressEmptyNode) {
      closeTag = "/";
    } else {
      closeTag = `></${key}`;
    }
    return closeTag;
  };
  Builder.prototype.buildTextValNode = function(val2, key, attrStr, level) {
    if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
      return this.indentate(level) + `<![CDATA[${val2}]]>` + this.newLine;
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
      return this.indentate(level) + `<!--${val2}-->` + this.newLine;
    } else if (key[0] === "?") {
      return this.indentate(level) + "<" + key + attrStr + "?" + this.tagEndChar;
    } else {
      let textValue = this.options.tagValueProcessor(key, val2);
      textValue = this.replaceEntitiesValue(textValue);
      if (textValue === "") {
        return this.indentate(level) + "<" + key + attrStr + this.closeTag(key) + this.tagEndChar;
      } else {
        return this.indentate(level) + "<" + key + attrStr + ">" + textValue + "</" + key + this.tagEndChar;
      }
    }
  };
  Builder.prototype.replaceEntitiesValue = function(textValue) {
    if (textValue && textValue.length > 0 && this.options.processEntities) {
      for (let i = 0;i < this.options.entities.length; i++) {
        const entity = this.options.entities[i];
        textValue = textValue.replace(entity.regex, entity.val);
      }
    }
    return textValue;
  };
  module.exports = Builder;
});

// node_modules/fast-xml-parser/src/fxp.js
var require_fxp = __commonJS((exports, module) => {
  var validator = require_validator();
  var XMLParser = require_XMLParser();
  var XMLBuilder = require_json2xml();
  module.exports = {
    XMLParser,
    XMLValidator: validator,
    XMLBuilder
  };
});

// node_modules/ecb-euro-exchange-rates/dist/index.js
var require_dist2 = __commonJS((exports, module) => {
  async function fetch() {
    const result = await get("http://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml");
    const rates = parse(result);
    if (rates.length !== 1) {
      throw new Error(`Expected result to contain one single entry, but got ${rates.length}`);
    }
    return rates[0];
  }
  async function fetchHistoric() {
    return parse(await get("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist.xml"));
  }
  async function fetchHistoric90d() {
    return parse(await get("https://www.ecb.europa.eu/stats/eurofxref/eurofxref-hist-90d.xml"));
  }
  async function get(url6) {
    const result = await global.fetch(url6);
    return await result.text();
  }
  var parse = function(string) {
    const data = new fast_xml_parser_1.XMLParser({ ignoreAttributes: false, isArray: () => true }).parse(string);
    const result = [];
    const entries = data["gesmes:Envelope"][0]["Cube"][0]["Cube"];
    if (typeof entries !== "object") {
      throw new Error("Result data does not have the expected structure");
    }
    for (const current of entries) {
      const time = current?.["@_time"]?.[0];
      assertString(time, "time");
      const rates = {};
      for (const item of current["Cube"]) {
        const currency2 = item["@_currency"]?.[0];
        assertString(currency2, "curency");
        const rateString = item["@_rate"]?.[0];
        assertString(rateString, "rate");
        const rate = parseFloat(rateString);
        rates[currency2] = rate;
      }
      result.push({ time, rates });
    }
    return result;
  };
  var assertString = function(value, valueName) {
    if (typeof value !== "string") {
      throw new Error(`Expected ${valueName} to be a string`);
    }
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parse = exports.fetchHistoric90d = exports.fetchHistoric = exports.fetch = undefined;
  var fast_xml_parser_1 = require_fxp();
  exports.fetch = fetch;
  exports.fetchHistoric = fetchHistoric;
  exports.fetchHistoric90d = fetchHistoric90d;
  exports.parse = parse;
  if (__require.main === module) {
    (async () => {
      const result = await fetch();
      console.log(JSON.stringify(result, null, 2));
    })().catch(() => process.exit(1));
  }
});

// node_modules/hono/dist/utils/body.js
async function parseFormData(request2, options) {
  const formData = await request2.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
var convertFormDataToBodyData = function(formData, options) {
  const form = Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
};
var parseBody = async (request2, options = Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request2 instanceof HonoRequest ? request2.raw.headers : request2.headers;
  const contentType = headers.get("Content-Type");
  if (contentType !== null && contentType.startsWith("multipart/form-data") || contentType !== null && contentType.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request2, { all, dot });
  }
  return {};
};
var handleParsingAllValues = (form, key, value) => {
  if (form[key] !== undefined) {
    if (Array.isArray(form[key])) {
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
};
var handleParsingNestedValues = (form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
};

// node_modules/hono/dist/utils/url.js
var splitPath = (path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
};
var splitRoutingPath = (routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
};
var extractGroupsFromPath = (path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
};
var replaceGroupMarks = (paths, groups) => {
  for (let i = groups.length - 1;i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1;j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
};
var patternCache = {};
var getPattern = (label) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    if (!patternCache[label]) {
      if (match[2]) {
        patternCache[label] = [label, match[1], new RegExp("^" + match[2] + "$")];
      } else {
        patternCache[label] = [label, match[1], true];
      }
    }
    return patternCache[label];
  }
  return null;
};
var tryDecodeURI = (str) => {
  try {
    return decodeURI(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decodeURI(match);
      } catch {
        return match;
      }
    });
  }
};
var getPath = (request2) => {
  const url = request2.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (;i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? undefined : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
};
var getPathNoStrict = (request2) => {
  const result = getPath(request2);
  return result.length > 1 && result[result.length - 1] === "/" ? result.slice(0, -1) : result;
};
var mergePath = (...paths) => {
  let p = "";
  let endsWithSlash = false;
  for (let path of paths) {
    if (p[p.length - 1] === "/") {
      p = p.slice(0, -1);
      endsWithSlash = true;
    }
    if (path[0] !== "/") {
      path = `/${path}`;
    }
    if (path === "/" && endsWithSlash) {
      p = `${p}/`;
    } else if (path !== "/") {
      p = `${p}${path}`;
    }
    if (path === "/" && p === "") {
      p = "/";
    }
  }
  return p;
};
var checkOptionalParameter = (path) => {
  if (!path.match(/\:.+\?$/)) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return /%/.test(value) ? decodeURIComponent_(value) : value;
};
var _getQueryParam = (url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? undefined : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? undefined : nextKeyIndex : valueIndex);
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? undefined : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url, key) => {
  return _getQueryParam(url, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var HonoRequest = class {
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request2, path = "/", matchResult = [[]]) {
    this.raw = request2;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.getDecodedParam(key) : this.getAllDecodedParams();
  }
  getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.getParamValue(paramKey);
    return param ? /\%/.test(param) ? decodeURIComponent_(param) : param : undefined;
  }
  getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? decodeURIComponent_(value) : value;
      }
    }
    return decoded;
  }
  getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name.toLowerCase()) ?? undefined;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  cachedBody = (key) => {
    const { bodyCache, raw } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body2) => {
        if (anyCachedKey === "json") {
          body2 = JSON.stringify(body2);
        }
        return new Response(body2)[key]();
      });
    }
    return bodyCache[key] = raw[key]();
  };
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw = (value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
  if (preserveCallbacks) {
    return raw(await resStr, callbacks);
  } else {
    return resStr;
  }
};

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = (headers, map = {}) => {
  Object.entries(map).forEach(([key, value]) => headers.set(key, value));
  return headers;
};
var Context = class {
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      this.#res.headers.delete("content-type");
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = (...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  };
  setLayout = (layout) => this.#layout = layout;
  getLayout = () => this.#layout;
  setRenderer = (renderer) => {
    this.#renderer = renderer;
  };
  header = (name, value, options) => {
    if (value === undefined) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  };
  status = (status) => {
    this.#isFresh = false;
    this.#status = status;
  };
  set = (key, value) => {
    this.#var ??= new Map;
    this.#var.set(key, value);
  };
  get = (key) => {
    return this.#var ? this.#var.get(key) : undefined;
  };
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  newResponse = (data, arg, headers) => {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers;
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  };
  body = (data, arg, headers) => {
    return typeof arg === "number" ? this.newResponse(data, arg, headers) : this.newResponse(data, arg);
  };
  text = (text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    return typeof arg === "number" ? this.newResponse(text, arg, headers) : this.newResponse(text, arg);
  };
  json = (object, arg, headers) => {
    const body2 = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json; charset=UTF-8";
    return typeof arg === "number" ? this.newResponse(body2, arg, headers) : this.newResponse(body2, arg);
  };
  html = (html2, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html2 === "object") {
      if (!(html2 instanceof Promise)) {
        html2 = html2.toString();
      }
      if (html2 instanceof Promise) {
        return html2.then((html22) => resolveCallback(html22, HtmlEscapedCallbackPhase.Stringify, false, {})).then((html22) => {
          return typeof arg === "number" ? this.newResponse(html22, arg, headers) : this.newResponse(html22, arg);
        });
      }
    }
    return typeof arg === "number" ? this.newResponse(html2, arg, headers) : this.newResponse(html2, arg);
  };
  redirect = (location, status) => {
    this.#headers ??= new Headers;
    this.#headers.set("Location", location);
    return this.newResponse(null, status ?? 302);
  };
  notFound = () => {
    this.#notFoundHandler ??= () => new Response;
    return this.#notFoundHandler(this);
  };
};

// node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
  return (context2, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        if (context2 instanceof Context) {
          context2.req.routeIndex = i;
        }
      } else {
        handler = i === middleware.length && next || undefined;
      }
      if (!handler) {
        if (context2 instanceof Context && context2.finalized === false && onNotFound) {
          res = await onNotFound(context2);
        }
      } else {
        try {
          res = await handler(context2, () => {
            return dispatch(i + 1);
          });
        } catch (err) {
          if (err instanceof Error && context2 instanceof Context && onError) {
            context2.error = err;
            res = await onError(err, context2);
            isError = true;
          } else {
            throw err;
          }
        }
      }
      if (res && (context2.finalized === false || isError)) {
        context2.res = res;
      }
      return context2;
    }
  };
};

// node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
};

// node_modules/hono/dist/hono-base.js
var COMPOSED_HANDLER = Symbol("composedHandler");
var notFoundHandler = (c) => {
  return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
};
var Hono = class {
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          if (typeof handler !== "string") {
            this.addRoute(method, this.#path, handler);
          }
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const strict = options.strict ?? true;
    delete options.strict;
    Object.assign(this, options);
    this.getPath = strict ? options.getPath ?? getPath : getPathNoStrict;
  }
  clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.routes = this.routes;
    return clone;
  }
  notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app) {
    const subApp = this.basePath(path);
    app.routes.map((r) => {
      let handler;
      if (app.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = async (c, next) => (await compose([], app.errorHandler)(c, () => r.handler(c, next))).res;
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = (handler) => {
    this.errorHandler = handler;
    return this;
  };
  notFound = (handler) => {
    this.notFoundHandler = handler;
    return this;
  };
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        replaceRequest = options.replaceRequest;
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = undefined;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request3) => {
        const url3 = new URL(request3.url);
        url3.pathname = url3.pathname.slice(pathPrefixLength) || "/";
        return new Request(url3, request3);
      };
    })();
    const handler = async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    };
    this.addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  matchRoute(method, path) {
    return this.router.match(method, path);
  }
  handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  dispatch(request3, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.dispatch(request3, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request3, { env });
    const matchResult = this.matchRoute(method, path);
    const c = new Context(request3, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.notFoundHandler(c);
        });
      } catch (err) {
        return this.handleError(err, c);
      }
      return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.notFoundHandler(c))).catch((err) => this.handleError(err, c)) : res ?? this.notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.notFoundHandler);
    return (async () => {
      try {
        const context3 = await composed(c);
        if (!context3.finalized) {
          throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
        }
        return context3.res;
      } catch (err) {
        return this.handleError(err, c);
      }
    })();
  }
  fetch = (request3, ...rest) => {
    return this.dispatch(request3, rest[1], rest[0], request3.method);
  };
  request = (input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      if (requestInit !== undefined) {
        input = new Request(input, requestInit);
      }
      return this.fetch(input, Env, executionCtx);
    }
    input = input.toString();
    const path = /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`;
    const req = new Request(path, requestInit);
    return this.fetch(req, Env, executionCtx);
  };
  fire = () => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.dispatch(event.request, event, undefined, event.request.method));
    });
  };
};

// node_modules/hono/dist/router/reg-exp-router/node.js
var compareKey = function(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
};
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
var Node = class {
  index;
  varIndex;
  children = Object.create(null);
  insert(tokens, index, paramMap, context3, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.index !== undefined) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.children[regexpStr];
      if (!node) {
        if (Object.keys(this.children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[regexpStr] = new Node;
        if (name !== "") {
          node.varIndex = context3.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.varIndex]);
      }
    } else {
      node = this.children[token];
      if (!node) {
        if (Object.keys(this.children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.children[token] = new Node;
      }
    }
    node.insert(restTokens, index, paramMap, context3, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.children[k];
      return (typeof c.varIndex === "number" ? `(${k})@${c.varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.index === "number") {
      strList.unshift(`#${this.index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
  context = { varIndex: 0 };
  root = new Node;
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0;; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1;i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1;j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.root.insert(tokens, index, paramAssoc, this.context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (typeof handlerIndex !== "undefined") {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (typeof paramIndex !== "undefined") {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var buildWildcardRegExp = function(path) {
  return wildcardRegExpCache[path] ??= new RegExp(path === "*" ? "" : `^${path.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}\$`);
};
var clearWildcardRegExpCache = function() {
  wildcardRegExpCache = Object.create(null);
};
var buildMatcherFromPreprocessedRoutes = function(routes) {
  const trie2 = new Trie;
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
  const staticMap = Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length;i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie2.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = Object.create(null);
      paramCount -= 1;
      for (;paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie2.buildRegExp();
  for (let i = 0, len = handlerData.length;i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length;j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length;k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
};
var findMiddleware = function(middleware, path) {
  if (!middleware) {
    return;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return;
};
var emptyParam = [];
var nullMatcher = [/^$/, [], Object.create(null)];
var wildcardRegExpCache = Object.create(null);
var RegExpRouter = class {
  name = "RegExpRouter";
  middleware;
  routes;
  constructor() {
    this.middleware = { [METHOD_NAME_ALL]: Object.create(null) };
    this.routes = { [METHOD_NAME_ALL]: Object.create(null) };
  }
  add(method, path, handler) {
    const { middleware, routes } = this;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length;i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  buildAllMatchers() {
    const matchers = Object.create(null);
    [...Object.keys(this.routes), ...Object.keys(this.middleware)].forEach((method) => {
      matchers[method] ||= this.buildMatcher(method);
    });
    this.middleware = this.routes = undefined;
    return matchers;
  }
  buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.middleware, this.routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]]));
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
  name = "SmartRouter";
  routers = [];
  routes = [];
  constructor(init) {
    Object.assign(this, init);
  }
  add(method, path, handler) {
    if (!this.routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.routes) {
      throw new Error("Fatal error");
    }
    const { routers, routes } = this;
    const len = routers.length;
    let i = 0;
    let res;
    for (;i < len; i++) {
      const router5 = routers[i];
      try {
        routes.forEach((args) => {
          router5.add(...args);
        });
        res = router5.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router5.match.bind(router5);
      this.routers = [router5];
      this.routes = undefined;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/node.js
var Node2 = class {
  methods;
  children;
  patterns;
  order = 0;
  name;
  params = Object.create(null);
  constructor(method, handler, children) {
    this.children = children || Object.create(null);
    this.methods = [];
    this.name = "";
    if (method && handler) {
      const m = Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0, name: this.name };
      this.methods = [m];
    }
    this.patterns = [];
  }
  insert(method, path, handler) {
    this.name = `${method} ${path}`;
    this.order = ++this.order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length;i < len; i++) {
      const p = parts[i];
      if (Object.keys(curNode.children).includes(p)) {
        curNode = curNode.children[p];
        const pattern2 = getPattern(p);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.children[p] = new Node2;
      const pattern = getPattern(p);
      if (pattern) {
        curNode.patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.children[p];
    }
    if (!curNode.methods.length) {
      curNode.methods = [];
    }
    const m = Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      name: this.name,
      score: this.order
    };
    m[method] = handlerSet;
    curNode.methods.push(m);
    return curNode;
  }
  gHSets(node3, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node3.methods.length;i < len; i++) {
      const m = node3.methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = Object.create(null);
      if (handlerSet !== undefined) {
        handlerSet.params = Object.create(null);
        handlerSet.possibleKeys.forEach((key) => {
          const processed = processedSet[handlerSet.name];
          handlerSet.params[key] = params[key] && !processed ? params[key] : nodeParams[key] ?? params[key];
          processedSet[handlerSet.name] = true;
        });
        handlerSets.push(handlerSet);
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.params = Object.create(null);
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    for (let i = 0, len = parts.length;i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length;j < len2; j++) {
        const node3 = curNodes[j];
        const nextNode = node3.children[part];
        if (nextNode) {
          nextNode.params = node3.params;
          if (isLast === true) {
            if (nextNode.children["*"]) {
              handlerSets.push(...this.gHSets(nextNode.children["*"], method, node3.params, Object.create(null)));
            }
            handlerSets.push(...this.gHSets(nextNode, method, node3.params, Object.create(null)));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node3.patterns.length;k < len3; k++) {
          const pattern = node3.patterns[k];
          const params = { ...node3.params };
          if (pattern === "*") {
            const astNode = node3.children["*"];
            if (astNode) {
              handlerSets.push(...this.gHSets(astNode, method, node3.params, Object.create(null)));
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node3.children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp && matcher.test(restPathString)) {
            params[name] = restPathString;
            handlerSets.push(...this.gHSets(child, method, node3.params, params));
            continue;
          }
          if (matcher === true || matcher instanceof RegExp && matcher.test(part)) {
            if (typeof key === "string") {
              params[name] = part;
              if (isLast === true) {
                handlerSets.push(...this.gHSets(child, method, params, node3.params));
                if (child.children["*"]) {
                  handlerSets.push(...this.gHSets(child.children["*"], method, params, node3.params));
                }
              } else {
                child.params = params;
                tempNodes.push(child);
              }
            }
          }
        }
      }
      curNodes = tempNodes;
    }
    const results = handlerSets.sort((a, b) => {
      return a.score - b.score;
    });
    return [results.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  name = "TrieRouter";
  node;
  constructor() {
    this.node = new Node2;
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (const p of results) {
        this.node.insert(method, p, handler);
      }
      return;
    }
    this.node.insert(method, path, handler);
  }
  match(method, path) {
    return this.node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter, new TrieRouter]
    });
  }
};

// node_modules/hono/dist/middleware/cors/index.js
var cors = (options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      return () => optsOrigin;
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : optsOrigin[0];
    }
  })(opts.origin);
  return async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: c.res.statusText
      });
    }
    await next();
  };
};

// node_modules/@hono/node-server/dist/vercel.mjs
import {Http2ServerRequest} from "http2";
import {Readable} from "stream";
var writeFromReadableStream = function(stream, writable) {
  if (stream.locked) {
    throw new TypeError("ReadableStream is locked.");
  } else if (writable.destroyed) {
    stream.cancel();
    return;
  }
  const reader = stream.getReader();
  writable.on("close", cancel);
  writable.on("error", cancel);
  reader.read().then(flow, cancel);
  return reader.closed.finally(() => {
    writable.off("close", cancel);
    writable.off("error", cancel);
  });
  function cancel(error) {
    reader.cancel(error).catch(() => {
    });
    if (error) {
      writable.destroy(error);
    }
  }
  function onDrain() {
    reader.read().then(flow, cancel);
  }
  function flow({ done, value }) {
    try {
      if (done) {
        writable.end();
      } else if (!writable.write(value)) {
        writable.once("drain", onDrain);
      } else {
        return reader.read().then(flow, cancel);
      }
    } catch (e) {
      cancel(e);
    }
  }
};
var getInternalBody = function(response) {
  if (!stateKey) {
    return;
  }
  if (response instanceof Response2) {
    response = response[getResponseCache]();
  }
  const state = response[stateKey];
  return state && state.body || undefined;
};
import crypto from "crypto";
var RequestError = class extends Error {
  static name = "RequestError";
  constructor(message, options) {
    super(message, options);
  }
};
var toRequestError = (e) => {
  if (e instanceof RequestError) {
    return e;
  }
  return new RequestError(e.message, { cause: e });
};
var GlobalRequest = global.Request;
var Request2 = class extends GlobalRequest {
  constructor(input, options) {
    if (typeof input === "object" && getRequestCache in input) {
      input = input[getRequestCache]();
    }
    if (typeof options?.body?.getReader !== "undefined") {
      options.duplex ??= "half";
    }
    super(input, options);
  }
};
var newRequestFromIncoming = (method, url6, incoming, abortController) => {
  const headerRecord = [];
  const rawHeaders = incoming.rawHeaders;
  for (let i = 0;i < rawHeaders.length; i += 2) {
    const { [i]: key, [i + 1]: value } = rawHeaders;
    if (key.charCodeAt(0) !== 58) {
      headerRecord.push([key, value]);
    }
  }
  const init = {
    method,
    headers: headerRecord,
    signal: abortController.signal
  };
  if (method === "TRACE") {
    init.method = "GET";
    const req = new Request2(url6, init);
    Object.defineProperty(req, "method", {
      get() {
        return "TRACE";
      }
    });
    return req;
  }
  if (!(method === "GET" || method === "HEAD")) {
    init.body = Readable.toWeb(incoming);
  }
  return new Request2(url6, init);
};
var getRequestCache = Symbol("getRequestCache");
var requestCache = Symbol("requestCache");
var incomingKey = Symbol("incomingKey");
var urlKey = Symbol("urlKey");
var abortControllerKey = Symbol("abortControllerKey");
var getAbortController = Symbol("getAbortController");
var requestPrototype = {
  get method() {
    return this[incomingKey].method || "GET";
  },
  get url() {
    return this[urlKey];
  },
  [getAbortController]() {
    this[getRequestCache]();
    return this[abortControllerKey];
  },
  [getRequestCache]() {
    this[abortControllerKey] ||= new AbortController;
    return this[requestCache] ||= newRequestFromIncoming(this.method, this[urlKey], this[incomingKey], this[abortControllerKey]);
  }
};
[
  "body",
  "bodyUsed",
  "cache",
  "credentials",
  "destination",
  "headers",
  "integrity",
  "mode",
  "redirect",
  "referrer",
  "referrerPolicy",
  "signal",
  "keepalive"
].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    get() {
      return this[getRequestCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(requestPrototype, k, {
    value: function() {
      return this[getRequestCache]()[k]();
    }
  });
});
Object.setPrototypeOf(requestPrototype, Request2.prototype);
var newRequest = (incoming, defaultHostname) => {
  const req = Object.create(requestPrototype);
  req[incomingKey] = incoming;
  const host = (incoming instanceof Http2ServerRequest ? incoming.authority : incoming.headers.host) || defaultHostname;
  if (!host) {
    throw new RequestError("Missing host header");
  }
  const url6 = new URL(`${incoming instanceof Http2ServerRequest || incoming.socket && incoming.socket.encrypted ? "https" : "http"}://${host}${incoming.url}`);
  if (url6.hostname.length !== host.length && url6.hostname !== host.replace(/:\d+$/, "")) {
    throw new RequestError("Invalid host header");
  }
  req[urlKey] = url6.href;
  return req;
};
var buildOutgoingHttpHeaders = (headers) => {
  const res = {};
  const cookies = [];
  for (const [k, v] of headers) {
    if (k === "set-cookie") {
      cookies.push(v);
    } else {
      res[k] = v;
    }
  }
  if (cookies.length > 0) {
    res["set-cookie"] = cookies;
  }
  res["content-type"] ??= "text/plain; charset=UTF-8";
  return res;
};
var responseCache = Symbol("responseCache");
var getResponseCache = Symbol("getResponseCache");
var cacheKey = Symbol("cache");
var GlobalResponse = global.Response;
var Response2 = class _Response {
  #body;
  #init;
  [getResponseCache]() {
    delete this[cacheKey];
    return this[responseCache] ||= new GlobalResponse(this.#body, this.#init);
  }
  constructor(body2, init) {
    this.#body = body2;
    if (init instanceof _Response) {
      const cachedGlobalResponse = init[responseCache];
      if (cachedGlobalResponse) {
        this.#init = cachedGlobalResponse;
        this[getResponseCache]();
        return;
      } else {
        this.#init = init.#init;
      }
    } else {
      this.#init = init;
    }
    if (typeof body2 === "string" || typeof body2?.getReader !== "undefined") {
      let headers = init?.headers || { "content-type": "text/plain; charset=UTF-8" };
      if (headers instanceof Headers) {
        headers = buildOutgoingHttpHeaders(headers);
      }
      this[cacheKey] = [init?.status || 200, body2, headers];
    }
  }
};
[
  "body",
  "bodyUsed",
  "headers",
  "ok",
  "redirected",
  "status",
  "statusText",
  "trailers",
  "type",
  "url"
].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    get() {
      return this[getResponseCache]()[k];
    }
  });
});
["arrayBuffer", "blob", "clone", "formData", "json", "text"].forEach((k) => {
  Object.defineProperty(Response2.prototype, k, {
    value: function() {
      return this[getResponseCache]()[k]();
    }
  });
});
Object.setPrototypeOf(Response2, GlobalResponse);
Object.setPrototypeOf(Response2.prototype, GlobalResponse.prototype);
var stateKey = Reflect.ownKeys(new GlobalResponse).find((k) => typeof k === "symbol" && k.toString() === "Symbol(state)");
if (!stateKey) {
  console.warn("Failed to find Response internal state key");
}
var X_ALREADY_SENT = "x-hono-already-sent";
var webFetch = global.fetch;
if (typeof global.crypto === "undefined") {
  global.crypto = crypto;
}
global.fetch = (info, init) => {
  init = {
    compress: false,
    ...init
  };
  return webFetch(info, init);
};
var regBuffer = /^no$/i;
var regContentType = /^(application\/json\b|text\/(?!event-stream\b))/i;
var handleRequestError = () => new Response(null, {
  status: 400
});
var handleFetchError = (e) => new Response(null, {
  status: e instanceof Error && (e.name === "TimeoutError" || e.constructor.name === "TimeoutError") ? 504 : 500
});
var handleResponseError = (e, outgoing) => {
  const err = e instanceof Error ? e : new Error("unknown error", { cause: e });
  if (err.code === "ERR_STREAM_PREMATURE_CLOSE") {
    console.info("The user aborted a request.");
  } else {
    console.error(e);
    if (!outgoing.headersSent) {
      outgoing.writeHead(500, { "Content-Type": "text/plain" });
    }
    outgoing.end(`Error: ${err.message}`);
    outgoing.destroy(err);
  }
};
var responseViaCache = (res, outgoing) => {
  const [status, body2, header] = res[cacheKey];
  if (typeof body2 === "string") {
    header["Content-Length"] = Buffer.byteLength(body2);
    outgoing.writeHead(status, header);
    outgoing.end(body2);
  } else {
    outgoing.writeHead(status, header);
    return writeFromReadableStream(body2, outgoing)?.catch((e) => handleResponseError(e, outgoing));
  }
};
var responseViaResponseObject = async (res, outgoing, options = {}) => {
  if (res instanceof Promise) {
    if (options.errorHandler) {
      try {
        res = await res;
      } catch (err) {
        const errRes = await options.errorHandler(err);
        if (!errRes) {
          return;
        }
        res = errRes;
      }
    } else {
      res = await res.catch(handleFetchError);
    }
  }
  if (cacheKey in res) {
    return responseViaCache(res, outgoing);
  }
  const resHeaderRecord = buildOutgoingHttpHeaders(res.headers);
  const internalBody = getInternalBody(res);
  if (internalBody) {
    if (internalBody.length) {
      resHeaderRecord["content-length"] = internalBody.length;
    }
    outgoing.writeHead(res.status, resHeaderRecord);
    if (typeof internalBody.source === "string" || internalBody.source instanceof Uint8Array) {
      outgoing.end(internalBody.source);
    } else if (internalBody.source instanceof Blob) {
      outgoing.end(new Uint8Array(await internalBody.source.arrayBuffer()));
    } else {
      await writeFromReadableStream(internalBody.stream, outgoing);
    }
  } else if (res.body) {
    const {
      "transfer-encoding": transferEncoding,
      "content-encoding": contentEncoding,
      "content-length": contentLength,
      "x-accel-buffering": accelBuffering,
      "content-type": contentType
    } = resHeaderRecord;
    if (transferEncoding || contentEncoding || contentLength || accelBuffering && regBuffer.test(accelBuffering) || !regContentType.test(contentType)) {
      outgoing.writeHead(res.status, resHeaderRecord);
      await writeFromReadableStream(res.body, outgoing);
    } else {
      const buffer = await res.arrayBuffer();
      resHeaderRecord["content-length"] = buffer.byteLength;
      outgoing.writeHead(res.status, resHeaderRecord);
      outgoing.end(new Uint8Array(buffer));
    }
  } else if (resHeaderRecord[X_ALREADY_SENT]) {
  } else {
    outgoing.writeHead(res.status, resHeaderRecord);
    outgoing.end();
  }
};
var getRequestListener = (fetchCallback, options = {}) => {
  if (options.overrideGlobalObjects !== false && global.Request !== Request2) {
    Object.defineProperty(global, "Request", {
      value: Request2
    });
    Object.defineProperty(global, "Response", {
      value: Response2
    });
  }
  return async (incoming, outgoing) => {
    let res, req;
    try {
      req = newRequest(incoming, options.hostname);
      outgoing.on("close", () => {
        if (incoming.errored) {
          req[getAbortController]().abort(incoming.errored.toString());
        }
      });
      res = fetchCallback(req, { incoming, outgoing });
      if (cacheKey in res) {
        return responseViaCache(res, outgoing);
      }
    } catch (e) {
      if (!res) {
        if (options.errorHandler) {
          res = await options.errorHandler(req ? e : toRequestError(e));
          if (!res) {
            return;
          }
        } else if (!req) {
          res = handleRequestError();
        } else {
          res = handleFetchError(e);
        }
      } else {
        return handleResponseError(e, outgoing);
      }
    }
    try {
      return responseViaResponseObject(res, outgoing, options);
    } catch (e) {
      return handleResponseError(e, outgoing);
    }
  };
};
var handle = (app) => {
  return getRequestListener(app.fetch);
};

// src/cache/cache.ts
var currency = __toESM(require_dist(), 1);

class Cache {
  static instance;
  data;
  timestamp;
  duration;
  constructor() {
    if (Cache.instance)
      throw new Error("Use Cache.getInstance() instead of new Cache().");
    Cache.instance = this;
    this.data = new Map;
    this.timestamp = Date.now();
    this.duration = 60 * 60 * 1000;
  }
  static getInstance() {
    if (!Cache.instance)
      Cache.instance = new Cache;
    return Cache.instance;
  }
  hasEntry(currencyCode) {
    try {
      if (!currencyCode)
        throw new Error("Invalid currency code.");
      return this.data.has(currencyCode);
    } catch (error) {
      let errorMessage = "Failed to check cache entry.";
      if (error instanceof Error && error.message)
        errorMessage = `Failed to check cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
  hasAnyEntries() {
    return this.data.size > 0;
  }
  getEntry(currencyCode) {
    try {
      if (!currencyCode)
        throw new Error("Invalid currency code.");
      return this.data.get(currencyCode);
    } catch (error) {
      let errorMessage = "Failed to get cache entry.";
      if (error instanceof Error && error.message)
        errorMessage = `Failed to get cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
  getAllEntries() {
    return Array.from(this.data.values());
  }
  setEntry(currencyCode, rate, chartData) {
    try {
      if (!currencyCode || !currency.getAllCodes().includes(currencyCode))
        throw new Error("Invalid currency code.");
      if (!rate)
        throw new Error("Invalid rate.");
      if (!chartData)
        throw new Error("Invalid chart data.");
      this.data.set(currencyCode, {
        currency: {
          code: currencyCode,
          name: currency.getCurrencyName(currencyCode),
          symbol: currency.getCurrencySymbol(currencyCode)
        },
        rate,
        chartData
      });
    } catch (error) {
      let errorMessage = "Failed to set cache entry.";
      if (error instanceof Error && error.message)
        errorMessage = `Failed to set cache entry: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
  clear() {
    this.data.clear();
  }
  getTimeStamp() {
    return this.timestamp;
  }
  setTimeStamp(timestamp) {
    try {
      if (!timestamp)
        throw new Error("Invalid timestamp.");
      this.timestamp = timestamp;
    } catch (error) {
      let errorMessage = "Failed to set cache timestamp.";
      if (error instanceof Error && error.message)
        errorMessage = `Failed to set cache timestamp: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
  getDuration() {
    return this.duration;
  }
  setDuration(duration) {
    try {
      if (!duration)
        throw new Error("Invalid cache duration.");
      this.duration = duration;
    } catch (error) {
      let errorMessage = "Failed to set cache duration.";
      if (error instanceof Error && error.message)
        errorMessage = `Failed to set cache duration: ${error.message}`;
      throw new Error(errorMessage);
    }
  }
}

// src/services/currency.ts
var import_ecb_euro_exchange_rates = __toESM(require_dist2(), 1);
var cache2 = Cache.getInstance();
var getCurrencyData = async (currency2) => {
  try {
    if (!currency2)
      throw new Error("Invalid currency.");
    if (Date.now() - cache2.getTimeStamp() > cache2.getDuration() || !cache2.hasEntry(currency2.code)) {
      await updateCache();
      return cache2.getEntry(currency2.code);
    }
    return cache2.getEntry(currency2.code);
  } catch (error) {
    let errorMessage = "Failed to get currency data.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to get currency data: ${error.message}`;
    throw new Error(errorMessage);
  }
};
var getAllCurrenciesData = async () => {
  try {
    if (Date.now() - cache2.getTimeStamp() > cache2.getDuration() || !cache2.hasAnyEntries()) {
      await updateCache();
      return cache2.getAllEntries();
    }
    return cache2.getAllEntries();
  } catch (error) {
    let errorMessage = "Failed to get all currencies data.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to get all currencies data: ${error.message}`;
    throw new Error(errorMessage);
  }
};
var updateCache = async () => {
  try {
    cache2.clear();
    const [fetchResults, fetchHistoric90dResults] = await Promise.all([import_ecb_euro_exchange_rates.fetch(), import_ecb_euro_exchange_rates.fetchHistoric90d()]);
    if (!fetchResults || !fetchHistoric90dResults)
      throw new Error("Failed to fetch data from the ECB API.");
    const chartData = new Map;
    fetchHistoric90dResults.forEach(({ rates, time }) => {
      const timestamp = new Date(time).getTime();
      Object.entries(rates).forEach(([currencyCode, rate]) => {
        if (!chartData.has(currencyCode))
          chartData.set(currencyCode, []);
        chartData.get(currencyCode).push([timestamp, rate]);
      });
      if (!chartData.has("EUR")) {
        chartData.set("EUR", []);
      }
      chartData.get("EUR").push([timestamp, 1]);
    });
    cache2.setEntry("EUR", 1, chartData.get("EUR"));
    Object.entries(fetchResults.rates).forEach(([currencyCode, rate]) => {
      cache2.setEntry(currencyCode, rate, chartData.get(currencyCode) || []);
    });
    cache2.setTimeStamp(Date.now());
  } catch (error) {
    let errorMessage = "Failed to update cache.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to update cache: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// src/controllers/currencies.ts
var getCurrencies = async () => {
  try {
    const currenciesData = await getAllCurrenciesData();
    return currenciesData.map(({ currency: currency3 }) => currency3);
  } catch (error) {
    let errorMessage = "Failed to fetch currencies.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to fetch currencies: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// src/routes/currencies.ts
var currenciesRoutes = new Hono2;
currenciesRoutes.get("/", async (context3) => {
  try {
    const currencies2 = await getCurrencies();
    return context3.json(currencies2);
  } catch (error) {
    let errorMessage = "Failed to fetch currencies.";
    if (error instanceof Error && error.message)
      errorMessage = error.message;
    return context3.json({ error: errorMessage }, 500);
  }
});
var currencies_default = currenciesRoutes;

// src/controllers/convert.ts
var convertCurrency = async (base, target, amount) => {
  try {
    if (!base)
      throw new Error("Invalid base currency.");
    if (!target)
      throw new Error("Invalid target currency.");
    if (amount <= 0)
      throw new Error("Invalid amount.");
    const baseData = await getCurrencyData(base);
    const targetData = await getCurrencyData(target);
    if (!baseData || !targetData)
      throw new Error("Currency data not found.");
    const rate = targetData.rate / baseData.rate;
    const result = amount * rate;
    const chartData = targetData.chartData.map(([targetX, targetY]) => {
      const baseChartData = baseData.chartData.find(([baseX]) => baseX === targetX);
      if (!baseChartData)
        throw new Error("Base currency data not found.");
      const convertedY = targetY / baseChartData[1];
      return [targetX, Number(convertedY.toFixed(5))];
    }).reverse();
    return {
      base: {
        currency: base,
        amount
      },
      result: {
        currency: target,
        convertedAmount: Number(result.toFixed(5)),
        chartData
      }
    };
  } catch (error) {
    let errorMessage = "Failed to convert currency.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to convert currency: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// src/controllers/conversion-table.ts
var getConversionTable = async (base) => {
  try {
    if (!base)
      throw new Error("Invalid base currency");
    const allCurrencies = (await getAllCurrenciesData()).map(({ currency: currency5 }) => currency5);
    const targetCurrencyCodes = ["USD", "EUR", "GBP", "JPY", "AUD"].filter((currencyCode) => currencyCode !== base.code);
    const result = (await Promise.all(targetCurrencyCodes.map(async (targetCurrencyCode) => {
      const target = allCurrencies.find(({ code }) => code === targetCurrencyCode);
      if (!target)
        throw new Error(`Currency ${targetCurrencyCode} not found`);
      return await convertCurrency(base, target, 1);
    }))).map(({ result: result2 }) => result2);
    return {
      base,
      result
    };
  } catch (error) {
    let errorMessage = "Failed to get conversion table.";
    if (error instanceof Error && error.message)
      errorMessage = `Failed to get conversion table: ${error.message}`;
    throw new Error(errorMessage);
  }
};

// src/routes/conversion-table.ts
var conversionTableRoutes = new Hono2;
conversionTableRoutes.post("/", async (context3) => {
  try {
    const { base } = await context3.req.json();
    const conversionTable = await getConversionTable(base);
    return context3.json(conversionTable);
  } catch (error) {
    let errorMessage = "Failed to get conversion table.";
    if (error instanceof Error && error.message)
      errorMessage = error.message;
    return context3.json({ error: errorMessage }, 500);
  }
});
var conversion_table_default = conversionTableRoutes;

// src/routes/convert.ts
var convertRoutes = new Hono2;
convertRoutes.post("/", async (context3) => {
  try {
    const { base, target, amount } = await context3.req.json();
    const result = await convertCurrency(base, target, amount);
    return context3.json(result);
  } catch (error) {
    let errorMessage = "Failed to convert currency.";
    if (error instanceof Error && error.message)
      errorMessage = error.message;
    return context3.json({ error: errorMessage }, 500);
  }
});
var convert_default = convertRoutes;

// src/index.ts
var app = new Hono2;
app.use("*", cors({
  origin: ["http://localhost:4200", "https://currencyconverter-frontend.vercel.app"]
}));
app.onError((error, context3) => {
  console.error(error);
  return context3.json({ error: "An unexpected error occurred." }, 500);
});
app.route("/currencies", currencies_default);
app.route("/conversion-table", conversion_table_default);
app.route("/convert", convert_default);
var src_default = process.env.VERCEL ? handle(app) : app;
export {
  src_default as default
};
