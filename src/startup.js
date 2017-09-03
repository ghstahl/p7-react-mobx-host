import React from 'react';
import { render } from 'react-dom';
import * as mobx from 'mobx';

import * as Utils from './utils/utils';

window.p7hostGlobal = {
    utils:Utils,
    react:React,
    React:React,
    mobx:mobx,
    mobxReact:mobxReact
};