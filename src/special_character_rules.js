
const SpecialCharacterRules = {
    computeSpecialCharacterRule : function(string){
        return string.replace(new RegExp(0, 'g'), '*');
    },
}

module.exports = SpecialCharacterRules;