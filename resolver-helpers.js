const resolveFromParent = ({nodeType, fieldName, source, context, info}) => {
    const parentNode = context.nodeModel.getNodeById({
        id: source.parent
    });
    const type = info.schema.getType(nodeType);
    const resolver = type.getFields()[fieldName].resolve;
    return resolver(parentNode, {}, context, {fieldName});
}

const fetchFromParent = ({fieldName, source, context}) => (
    context.nodeModel.getNodeById({
        id: source.parent,
    })[fieldName]
)

module.exports = { fetchFromParent, resolveFromParent }
