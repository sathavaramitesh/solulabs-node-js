import * as My from "jm-ez-mysql";
import { Tables } from "../../config/tables";
import { Utils } from "../../helpers/utils";
import { Constants } from "../../config/constants"
export class UsersUtils {

  // booking request
  public async bookingRequest(data: Json) {
    return await My.insert(Tables.BOOKING, data);
  }

  // View Past Booking List
  public async listBooking(userId){
    return await My.findAll(Tables.BOOKING, ['*'], `userId = ? AND status = '${Constants.COMPLETED}' `, [userId]);

  }

  // add cabs
  public async addCab(data){
    return await My.insert(Tables.CAB, data);
  }

  // Near By all cab
  public async listOfCabNearBy(latitude, longitude){
 return await My.query(
 `SELECT *, (
    3959 * acos (
      cos ( radians(${latitude}) )
      * cos( radians( latitude ) )
      * cos( radians( longitude ) - radians(${longitude}) )
      + sin ( radians(${latitude}) )
      * sin( radians( latitude ) )
    )
  ) AS distance
FROM ${Tables.CAB}
HAVING distance < ${process.env.distance}
ORDER BY distance
LIMIT 0 , 20;`
)
  }

}
