const googleTranslate = require("@vitalets/google-translate-api");

module.exports.test1= async (req, res) => {
    let output = {};
    try {
      const response = await googleTranslate("How u doing?", { to: "ja" });
  
      output.translatedText = response.text;
      output.fromLanguage = response.from.language.iso;
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({
      success: true,
      data: output,
    });
  }
  
  module.exports.test2= async (req, res, next) => {
    let queryParameter = req.query;
  
    let output = {};
    try {
      const response = await googleTranslate(queryParameter.sourceText, {
        to: queryParameter.targetLanguage,
      });
  
      output.translatedText = response.text;
      output.fromLanguage = response.from.language.iso;
    } catch (error) {
      console.log(error);
    }
    res.status(200).json({
      success: true,
      data: output,
    });
  }