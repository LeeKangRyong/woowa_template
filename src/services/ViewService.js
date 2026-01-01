import { Output } from "../views/index.js";

class ViewService {
    // 재입력 로직 관련한 함수를 연결. View 전용 서브 컨트롤러 역할 수행
    constructor() {}

    // 재입력하는 로직을 private로 구현하고, 반복적인 코드 피하기
    static async #retryInputFunction(inputFunction) {
        while (true) {
            try {
                return await inputFunction();
            } catch (error) {
                Output.printError(error);
            }
        }
    }
}
