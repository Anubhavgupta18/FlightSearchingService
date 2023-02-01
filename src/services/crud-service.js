class crudService{
    constructor(repository)
    {
        this.repository = repository;
    }
    async create(data) {
        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in the crud-service layer');
            throw { error };
        }
    }
    async get(Id) {
        try {
            const result = await this.repository.get(Id);
            return result;
        } catch (error) {
            console.log('something went wrong in the crud-service layer');
            throw { error };
        }
    }
    async getAll() {
        try {
            const result = await this.repository.getAll();
            return result;
        } catch (error) {
            console.log('something went wrong in the crud-service layer');
            throw { error };
        }
    }
    async destroy(Id) {
        try {
            await this.repository.destroy(Id);
            return true;
        } catch (error) {
            console.log('something went wrong in the crud-service layer');
            throw { error };
        }
    }
    async update(Id, data) {
        try {
            const result = await this.repository.update(Id,data);
            return result;
        } catch (error) {
            console.log('something went wrong in the crud-service layer');
            throw { error };
        }
    }
}

module.exports = crudService;