import allure from '@wdio/allure-reporter'
import File from '../utils/File.js'

class Reporter {

    async addLog(strMsg){
        await File.appendTxtFile(global.strPath, strMsg)
        await allure.addStep(strMsg)
    }

}

export default new Reporter()