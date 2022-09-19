/*
 * This file is part of GEO-Comments-React.
 * Copyright (C) 2022 GEO Secretariat.
 *
 * GEO-Comments-React is free software; you can redistribute it and/or modify it
 * under the terms of the MIT License; see LICENSE file for more details.
 */

import axios from 'axios';

/**
 * Constants
 */
const BASE_HEADERS = {
  json: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const API_CONFIG_DEFAULT = {
  withCredentials: true,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFToken',
  headers: BASE_HEADERS.json,
};

export const httpFactory = (axiosConfig = API_CONFIG_DEFAULT) => {
  return axios.create(axiosConfig);
};

export const http = httpFactory();
