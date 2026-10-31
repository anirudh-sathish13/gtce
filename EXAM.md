# Linear Algebra Sample Exam 1D

This is a transcription of the **supplied first page only**: question 1 (5 parts, 5 points) and question 2 (7 parts, 7 points). Pages 2 and 3 were not supplied. The original directions mentioning those pages are preserved; the standalone PDF accurately says Page 1 of 1.

The editable worksheet is `source/activities/sample-exam-1d.ptx`, included in the existing Activities chapter in `source/main.ptx`. Both course formats use this same source. `source/exam-1d.ptx` provides a standalone wrapper.

## Build and preview

Install Python requirements and TeX Live (included by the existing Codespaces setup), then run:

```sh
pip install -r requirements.txt
pretext build course
pretext build print
pretext build exam-web
pretext build exam-print
pretext view course
pretext view exam-print
```

Outputs: `output/course/`, `output/print/course.pdf`, `output/exam-web/`, and `output/exam-print/sample-exam-1d.pdf`.

On a machine with Tectonic instead of TeX Live, put `tectonic` on PATH and run `python3 tools/configure-tectonic.py` before building. This writes an ignored machine-specific `executables.ptx`. No absolute machine paths are committed.

## Validation

```sh
pretext validate exam-web --engine salve
```

The exam source passes schema and supplemental validation. Both course targets and both standalone targets have been built. Web math and the final print layout were rendered and inspected. The checked PDF has one page, all 12 statements and 24 answer circles. The standalone print target applies typography through PreTeXt's `latex.preamble.late` parameter; content stays in native PreTeXt, with no screenshot or separately maintained PDF text.

Guide: [GTCE Onboarding](https://youtu.be/WOvtCwdfEis). Its captions were reviewed for the course/worksheet/include/build/preview/deploy workflow.

Publish all configured deployment targets after rebuilding:

```sh
pretext deploy
```

A verified PDF is also committed at `artifacts/sample-exam-1d.pdf` for direct download. Rebuild it with `pretext build exam-print` and copy the result there after content changes.
