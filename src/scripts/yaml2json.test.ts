import { yaml2json } from './yaml2json';

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

describe('yaml2json', () => {
  it('should parse a yaml structure', () => {
    expect(yaml2json(inYaml)).toEqual(
      JSON.stringify([
        {
          hosts: 'foo',
          tasks: [
            {
              name: 'do a thing',
              yum: {
                name: 'nodejs',
                state: 'present',
              },
            },
            {
              name: 'another thing',
              dnf: {
                name: 'yum',
                state: 'absent',
              },
            },
          ],
        },
      ])
    );
  });
});
