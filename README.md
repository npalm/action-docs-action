<p>
  <a href="https://github.com/npalm/action-docs-action/actions"><img alt="action-docs-action status" src="https://github.com/npalm/action-docs-action/workflows/build-test/badge.svg"></a>
</p>

# Action to update action documentation <!-- omit in toc -->

This action wraps [action-docs](https://github.com/npalm/action-docs) to update action documentation. By default the action will update `README.md` based on the the `action.yml`. See the parameters for changing the defaults.


## Usages

```yaml
      - uses: npalm/action-docs-action
```


<!-- terraform-docs-inputs -->
## Inputs

| parameter | description | required | default |
| - | - | - | - |
| readme | Readme file to update. | `true` | README.md |
| actionFile | THe action definition file. | `true` | action.yml |
| tocLevel | TOC level used for the headers. | `true` | 2 |



<!-- terraform-docs-inputs -->

<!-- terraform-docs-runs -->
## Runs

This action is an `node12` action.


<!-- terraform-docs-runs -->


## License

This project are released under the [MIT License](./LICENSE).