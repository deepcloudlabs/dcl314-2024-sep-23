const {getEmployeeModel, isUpdatableField} = require("./domain-hr");

const EmployeeModel = getEmployeeModel();

const getEmployeeById = (identity) => {
    return EmployeeModel.findOne({_id: identity}, {});
}

const getAllEmployees = (pageNo = 0, pageSize = 10) => {
    const skip = pageNo * pageSize;
    const limit = pageSize;
    return EmployeeModel.find({}, {}, {skip, limit});
}

const createEmployee = (newEmployee) => {
    const employee = new EmployeeModel(newEmployee);
    return employee.save();
}

const updateEmployee = (employee) => {
    let updatedEmployee = {}
    for (let field in employee) {
        if (isUpdatableField(field))
            updatedEmployee[field] = employee[field];
    }
    return EmployeeModel.findOneAndUpdate(
        {_id: employee._id},
        {$set: updatedEmployee}
    )
}

const removeEmployee = (identity) => {
    return EmployeeModel.findOneAndDelete({_id: identity});
}

const groupEmployeesByDepartment = () => {
    return EmployeeModel.aggregate([
        {
            "$group": {
                "_id": "$department",
                "count": {$sum: 1},
                "salary": {$sum: "$salary"}
            }
        },
        {
            "$sort": {
                "count": -1
            }
        }
    ]);
};

exports.getEmployeeById = getEmployeeById;
exports.getAllEmployees = getAllEmployees;
exports.createEmployee = createEmployee;
exports.removeEmployee = removeEmployee;
exports.updateEmployee = updateEmployee;
exports.groupEmployeesByDepartment = groupEmployeesByDepartment;
