# Node.js Buffer Size Testing

This project demonstrates Node.js buffer limitations when reading large files.

## Files

- `check-buffer-limit.js` - Shows Node.js buffer constants and maximum length
- `test-large-file.js` - Attempts to read a large file to test buffer limits
- `bigFile.txt` - A 2.5GB test file (created by the pipeline)

## Usage

```bash
# Check buffer limits
npm run check-buffer

# Create a 2.5GB test file
npm run create-big-file

# Test reading the large file
npm test
```

## Expected Behavior

The test will fail when trying to read files larger than 2GB due to Node.js buffer limitations.

## GitHub Actions

The project includes a manual trigger GitHub Actions workflow that:
1. Sets up Node.js environment
2. Creates a large test file
3. Runs the buffer tests
4. Demonstrates the file size limitations
