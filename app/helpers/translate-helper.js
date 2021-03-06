import Ember from 'ember';

var lookup = {
  "en" : {
    "wordClass": {
      "hk": "Noun (neuter)",
      "kk": "Noun (masculine)",
      "kvk": "Noun (feminine)",
      "lo": "Adjective",
      "so": "Verb",
      "ao": "Adverb",
      "to": "Numeral",
      "pfn": "Personal pronoun",
      "abfn": "Reflexive pronoun",
      "fn": "Other pronoun",
      "gr": "Definite article"
    },

    "grammarTag": {
      "1p": "1st person",
      "1P": "1st person",
      "2p": "2nd person",
      "2P": "2nd person",
      "3p": "3rd person",
      "3P": "3rd person",
      "ao": "adverb",
      "BH": "imperative",
      "EF": "genitive",
      "EFET": "genitive singular",
      "EFFT": "genitive plural",
      "ESB": "superlative, indefinite",
      "EST": "superlative",
      "ET": "singular",
      "EVB": "superlative, definite",
      "FH": "indicative",
      "fn": "pronoun",
      "FSB": "positive degree, indefinite",
      "FST": "positive degree",
      "FT": "plural",
      "FVB": "positive degree, definite",
      "GM": "active voice",
      "gr": "definite",
      "HK": "gender: neuter",
      "KK": "gender: masculine",
      "KVK": "gender: feminine",
      "LHNT": "past participle",
      "lo": "adjective",
      "MM": "mediopassive",
      "MST": "comparative",
      "NF": "nominative",
      "NFET": "nominative singular",
      "NFFT": "nominative plural",
      "NH": "infinitive",
      "no": "noun",
      "NT": "present tense",
      "OP": "impersonal construction",
      "pfn": "personal pronoun",
      "sagnb": "?supine",
      "so": "verb",
      "to": "numeral",
      "VH": "subjunctive",
      "ÞF": "accusative",
      "ÞFET": "accusative singular",
      "ÞFFT": "accusative plural",
      "ÞGF": "dative",
      "ÞGFET": "dative singular",
      "ÞGFFT": "dative plural",
      "ÞT": "past tense",
      "": "indefinite"
    }
  },

  "is" : {
    "wordClass": {
      "hk": "hvorugkyn",
      "kk": "karlkyn",
      "kvk": "kvenkyn",
      "lo": "lýsingarorð",
      "so": "sagnorð",
      "ao": "atviksorð",
      "to": "töluorð",
      "pfn": "persónufornafn",
      "abfn": "afturbeygt fornafn",
      "fn": "önnur fornöfn",
      "gr": "greinir"
    },

    "grammarTag": {
      "1p": "1. persóna (í fornöfnum)",
      "1P": "1. persóna (í sagnorðum)",
      "2p": "2. persóna (í fornöfnum)",
      "2P": "2. persóna (í sagnorðum)",
      "3p": "3. persóna (í fornöfnum)",
      "3P": "3. persóna (í sagnorðum)",
      "ao": "atviksorð",
      "BH": "boðháttur",
      "EF": "eignarfall",
      "EFET": "eignarfall eintölu",
      "EFFT": "eignarfall fleirtölu",
      "ESB": "efsta stig, sterk beyging",
      "EST": "efsta stig (í atviksorðum)",
      "ET": "eintala",
      "EVB": "efsta stig, veik beyging",
      "FH": "framsöguháttur",
      "fn": "fornafn (annað en persónufornafn eða eignarfornafn)",
      "FSB": "frumstig, sterk beyging",
      "FST": "frumstig (í atviksorðum)",
      "FT": "fleirtala",
      "FVB": "frumstig, veik beyging",
      "GM": "germynd",
      "gr": "með greini (í nafnorðum)",
      "HK": "hvorugkyn",
      "KK": "karlkyn",
      "KVK": "kvenkyn",
      "LHNT": "lýsingarháttur þátíðar",
      "lo": "lýsingarorð",
      "MM": "miðmynd",
      "MST": "miðstig",
      "NF": "nefnifall",
      "NFET": "nefnifall eintölu",
      "NFFT": "nefnifall fleirtölu",
      "NH": "nafnháttur",
      "no": "nafnorð (--> kyn)",
      "NT": "nútíð",
      "OP": "ópersónuleg beyging",
      "pfn": "persónufornafn",
      "sagnb": "sagnbót",
      "so": "sagnorð",
      "to": "töluorð",
      "VH": "viðtengingarháttur",
      "ÞF": "þolfall",
      "ÞFET": "þolfall eintölu",
      "ÞFFT": "þolfall fleirtölu",
      "ÞGF": "þágufall",
      "ÞGFET": "þágufall eintölu",
      "ÞGFFT": "þágufall fleirtölu",
      "ÞT": "þátíð",
      "": "sterk beyging"
    }
  }
};

export function json(dict, input) {
  var translation = lookup.en[dict] && lookup.en[dict][input];

  if(!translation) {
    console.warn('missing translation', dict, input);
  }

  return translation;
}

export default Ember.Handlebars.makeBoundHelper(json);
