#!/usr/bin/env node
"use strict";

const program = require('commander')
program.parse(process.argv)

const rmb = program.args.join('')
const map = ['壹','贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']

let target = []
for (const it of rmb) {
	target.push(map[it - 1])
}

console.log(target.join(''));
