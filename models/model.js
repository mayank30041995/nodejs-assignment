module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            age: Number,
            marks: Number
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Model = mongoose.model("model", schema);
    return Model;
};