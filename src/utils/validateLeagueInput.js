const validateLeagueInput = (values) => {
  let errors = {};

  if(!values.name) {
      errors.name = "Required name"
  }

  if(!values.data) {
      errors.data = "Required league info"
  }

  return errors
};

export default validateLeagueInput
