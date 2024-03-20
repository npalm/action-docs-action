<p>
  <a href="https://github.com/npalm/action-docs-action/actions"><img alt="action-docs-action status" src="https://github.com/npalm/action-docs-action/actions/workflows/ci.yml/badge.svg"></a>
</p>

<!-- action-docs-header source="action.yml" -->
# Action to update GitHub Action documentation
<!-- action-docs-header source="action.yml" -->

This action wraps [action-docs](https://github.com/npalm/action-docs) to update action and workflow documentation. By default the action will update `README.md` based on the `action.yml`. See the parameters for changing the defaults.

## Usage

The action will update your readme by replacing html comment tags. Add one of more tags based on the following template to your repo:  `<!-- action-docs-(header | description | inputs | outputs | runs | usage | all) source="action-file.yml" -->` to add the corresponding section.

- `header` : to add/update a header based on the name of the action/workflow (only added if action option `includeNameHeader` is set to true)
- `description` : to add/update a section with a descriptions of the action (applicable to actions only)
- `inputs`: to add/update a section with inputs of the action/workflow
- `outputs`: to add/update a section with outputs of the action/workflow
- `runs`: to add/update a section of the environment required to run (applicable to actions only)
- `usage`: to add/update a section containing an example of how to call the action/workflow. This comment also requires passing a project and a version to use in the example e.g. `<!-- action-docs-usage source="action-file.yml" project="npalm/action-docs" version="v2.3.0" -->`.
- `all`: to include all of the above in order

In your workflow add the action, see below for the available parameters.

```yaml
      - uses: npalm/action-docs-action
```

The action will not commit any change, to ensure the changes are persisted you can use an action to [commit](https://github.com/stefanzweifel/git-auto-commit-action) or raise a [pull request](https://github.com/peter-evans/create-pull-request).


<!-- action-docs-inputs source="action.yml" -->
## Inputs

| name | description | required | default |
| --- | --- | --- | --- |
| `readme` | <p>Readme file to update.</p> | `false` | `README.md` |
| `actionFile` | <p>The action definition file.<br/><em>Deprecated: This input is replaced by sourceFile</em></p> | `false` | `""` |
| `sourceFile` | <p>The action or workflow definition file.</p> | `false` | `action.yml` |
| `includeNameHeader` | <p>Include the name header in the updated readme.</p> | `false` | `true` |
| `tocLevel` | <p>TOC level used for the headers. The <code>includeNameHeader</code> input is influecing the TOC level, setting <code>includeNameHeader</code> to true will increase the TOC level by 1.</p> | `false` | `2` |
| `lineBreaks` | <p>Line breaks to be used in updated readme (LF, CR or CRLF).</p> | `false` | `LF` |
<!-- action-docs-inputs source="action.yml" -->


<!-- action-docs-runs source="action.yml" -->
## Runs

This action is a `node20` action.
<!-- action-docs-runs source="action.yml" -->
## License

This project are released under the [MIT License](./LICENSE).
