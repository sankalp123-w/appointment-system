const Doctors = require('../../../models/Doctor');

const findNearestDoctors = async (req, res, next) => {

    try {
        const doctors = await Doctors.find({}).populate('councilHour');
        console.log("res", doctors);

        res.send(doctors)

    } catch (error) {
        if (error) {
            console.log(error.message)
            next(error)
        }
    }
}



module.exports = {
    findNearestDoctors
}