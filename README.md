<p>
  <a href="https://github.com/npalm/action-docs-action/actions"><img alt="action-docs-action status" src="https://github.com/npalm/action-docs-action/workflows/build-test/badge.svg"></a>
</p>

# Action to update action documentation <!-- omit in toc -->

This action wraps [action-docs](https://github.com/npalm/action-docs) to update action documentation. By default the action will update `README.md` based on the the `action.yml`. See the parameters for changing the defaults.


## Usages

The action will update you readme by replacing html comment tags. Add one of more tags based on the following template to your repo:  `<!-- action-docs-(description | inputs | outputs | runs -->` to add the corresponding section.

- `description` : to add/update a section with a descriptions of the action
- `inputs`: to add/update a section with inputs of the action
- `outpus`: to add/update a section with outputs of the action
- `runs`: : to add/update a section of the environment required to run.

In your workflow add the action, see below for the available parameters.

```yaml
      - uses: npalm/action-docs-action
```

The action will not commit any change, to ensure the changes are persisted you can use an action to [commit](https://github.com/stefanzweifel/git-auto-commit-action) or raise a [pull request](https://github.com/peter-evans/create-pull-request).


<!-- action-docs-inputs -->undefined## Inputsundefinedundefined| parameter | description | required | default |undefined| - | - | - | - |undefined| readme | Readme file to update. | `false` | README.md |undefined| actionFile | THe action definition file. | `false` | action.yml |undefined| tocLevel | TOC level used for the headers. | `false` | 2 |undefined| lineBreaks | Line breaks to be used in updated readme (LF|CR|CRLF). | `false` | LF |undefinedundefinedundefinedundefined<!-- action-docs-inputs -->


<!-- action-docs-runs -->undefined## RunsundefinedundefinedThis action is an `node12` action.undefinedundefinedundefined<!-- action-docs-runs -->

## License

This project are released under the [MIT License](./LICENSE).