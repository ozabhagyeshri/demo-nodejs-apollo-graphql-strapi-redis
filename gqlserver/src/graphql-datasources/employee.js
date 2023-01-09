const { DepartmentDS } = require('./department')

class EmployeeDS extends DepartmentDS {
    constructor(employeeOpts) {
        super(employeeOpts)
    }

    async getByDepartmentId(departmentId, params={}) {
        var cacheKey = params ? JSON.stringify(params) : 'noparams'
        cacheKey = `department:${this.cacheKeyBase}:${cacheKey}`

        const cacheDoc = await this.cache.get(cacheKey)
        if (cacheDoc) {
            return JSON.parse(cacheDoc);
        }

        const doc = await this.service.get({
            ...params,
            "department.id": departmentId
        })

        this.cache.set(cacheKey, JSON.stringify(doc), { ttl: 3 })

        return doc;
    }
}

exports.EmployeeDS = EmployeeDS;