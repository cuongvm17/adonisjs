'use strict'
const Staff = use('App/Models/Staff')

class StaffController {
	async index ({ request, response, view }) {
		const staffs = await Staff
			.query()
		    .leftJoin('users as u','staff.user_id','u.id')
		    .select('staff.id', 'staff.staffname', 'u.username')
       		.orderBy('u.username','asc')
 			.fetch()

	    return response.status(200).send({data: staffs})
  	}
}

module.exports = StaffController
