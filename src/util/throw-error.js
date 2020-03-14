const DEFAULT_STATUS = 500;
const DEFAULT_DESCRIPTION = 'Something went wrong.';

const throwError = ({ description = DEFAULT_DESCRIPTION, status = DEFAULT_STATUS } = {}) => {

    throw new Error(JSON.stringify({ description, status }));
};

export default throwError;
