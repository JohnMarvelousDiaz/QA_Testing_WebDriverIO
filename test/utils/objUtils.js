import File from "../utils/File.js"

class objUtils {

    /** **************************************************
     * @function clickObject | @author marvs_052802
     * @description Click object
     * @param {Object} objElement - Object to be clicked
     * @returns <none></none>
     ************************************************** */

    async clickObject(objElement){
        await File.appendTxtFile(global.strPath, `Started Function: clickObject`)
        await objElement.waitForExist()
        await objElement.click()
        const strXpath = await objElement.selector
        await File.appendTxtFile(global.strPath, `Completed Function: clickObject - Success [${strXpath}]`)
    }

     /** **************************************************
     * @function setObjectValue | @author marvs_052802
     * @description Set Value to an Object
     * @param {Object} objElement - Object to set a value
     * @param {String} strText - Value
     * @returns <none></none>
     ************************************************** */

    async setObjectValue(objElement, strText){
        await File.appendTxtFile(global.strPath, `Started Function: setObjectValue`)
        await objElement.waitForExist()
        await objElement.setValue(strText)
        const strXpath = await objElement.selector
        await File.appendTxtFile(global.strPath, `Completed Function: setObjectValue - Success [${strXpath}]`)

    }

    /** **************************************************
     * @function getObjectValue | @author marvs_052802
     * @description Get Value to an Object
     * @param {Object} objElement - Object to get a value
     * @returns <none></none>
     ************************************************** */

    async getObjectValue(objElement){
        await File.appendTxtFile(global.strPath, `Started Function: getObjectValue`)
        await objElement.waitForExist()
        const strValue = objElement.getValue()
        const strXpath = objElement.selector
        await File.appendTxtFile(global.strPath, `Completed Function: getObjectValue - Success [${strXpath}]`)
        return strValue
    }

    async getObjectText(objElement){
        await File.appendTxtFile(global.strPath, `Started Function: getObjectText`)
        await objElement.waitForExist()
        const strText = objElement.getText()
        const strXpath = objElement.selector
        await File.appendTxtFile(global.strPath, `Completed Function: getObjectText - Success [${strXpath}]`)
        return strText
    }


}

export default new objUtils()