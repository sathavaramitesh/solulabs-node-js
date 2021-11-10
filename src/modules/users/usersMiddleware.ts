import { ResponseBuilder } from "../../helpers/responseBuilder";
import { Utils } from "../../helpers/utils";
import { UsersUtils } from "./usersUtils";
import { async } from "q";
import * as _ from "lodash";

export class UsersMiddleware {
    private usersUtils: UsersUtils = new UsersUtils();

}
