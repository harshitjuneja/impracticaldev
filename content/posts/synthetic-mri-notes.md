# Synthetic MRI For Brain Tumor Segmentation: Practical Notes

Generating synthetic contrast-enhanced MRI can be useful when the original modality is missing, but quality control is essential.

## Useful Evaluation Dimensions

- Structural similarity and preservation of relevant anatomy.
- Impact on downstream segmentation metrics.
- Failure behavior on out-of-distribution slices.

## Practical Lessons

1. Registration quality is often the bottleneck, not model capacity.
2. Synthetic images should be validated as inputs for downstream tasks, not only by visual inspection.
3. Simple baselines are still strong in low-data medical settings.

## Minimal Example Metric Table

| Model | SSIM | Dice |
| --- | --- | --- |
| Baseline U-Net | 0.81 | 0.77 |
| Synth + Seg Pipeline | 0.88 | 0.79 |

The right objective is not "best synthetic image". The right objective is "best clinical task performance under real constraints".
