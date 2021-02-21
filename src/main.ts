import * as core from '@actions/core';
import { generateActionMarkdownDocs } from 'action-docs';

async function run(): Promise<void> {
  try {
    const readmeFile: string = core.getInput('readme', { required: true });
    const tocLevel: number = parseInt(core.getInput('tocLevel', { required: true }));
    const actionFile: string = core.getInput('actionFile', { required: true });

    await generateActionMarkdownDocs({
      actionFile,
      readmeFile,
      updateReadme: true,
      tocLevel,
    });
  } catch (error) {
    core.debug(error);
    core.setFailed(error.message);
  }
}

run();
