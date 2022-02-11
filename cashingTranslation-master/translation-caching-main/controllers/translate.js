const googleTranslate = require("@vitalets/google-translate-api");

module.exports.translate= async (req, res) => {
    let queryParameter = req.query;
    console.log(queryParameter);
    let output = {};
    try {
      googleTranslate(queryParameter.sourceText, {
        to: queryParameter.targetLanguage,
      })
        .then((res) => {
          console.log(res.text);
          output.translatedText = res.text;
          console.log(res.from.language.iso);
          output.fromLanguage = res.from.language.iso;
          res.status(200).json({
            success: true,
            data: output,
          });
        });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        data: error,
      });
    }
  }