# V1.2 experiment recipes

Save current valid parameters using 保存参数 JSON. To restore, use 载入参数 JSON, select a file, confirm replacement, then run the experiment. Results are regenerated, never trusted from imported files. This is not autosave.

The file is limited to 8 KiB and exactly format/version/config/sharedScale. Format is bag-lab-recipe, version is 1; config contains exactly red/blue/draws/trials/seed with the original integer bounds. sharedScale must be boolean. Invalid or cancelled imports leave the current result intact. Edits, reset, running an experiment or changing the scale while a file is being read invalidate that read.

Actual checks: strict schema/types/bounds; real browser import, regenerated result equality and downloaded JSON; invalid/cancel preservation; delayed-file editing conflict; narrow 390px layout and hidden chooser; zero external HTTP and page errors in offline Chromium151.0.7922.34. Run test-recipe.cjs with an existing PLAYWRIGHT_MODULE environment variable. No dependencies need installing for the tool.

Two directed repairs: moving the chooser outside the settings form prevented its input event clearing results; a hidden CSS rule stopped the original input display rule exposing the chooser. Probability engine unchanged. No full old suite rerun, mobile hardware, or teaching-effect study. Desktop narrow screenshot was reviewed before the hidden-chooser repair; visibility after repair was checked by browser assertion.
