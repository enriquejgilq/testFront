export const carState = state => state.car;

export const loading = state => carState(state).loading;

export const error = state => carState(state).error;

export const getAll = state => carState(state).data;

export const getById = state => carState(state).detail;

