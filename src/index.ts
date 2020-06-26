import { parse } from 'yaml';

const inYaml = `
---
- hosts: foo
  tasks:
  - name: do a thing
    yum:
      name: nodejs
      state: present
  - name: another thing
    dnf:
      name: yum
      state: absent
`;
console.log(JSON.stringify(parse(inYaml)));
