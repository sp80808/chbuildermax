# Contribution Guidelines

## Development Environment Setup

### Prerequisites
- Node.js v18+
- Ableton Live 11+ with Max for Live
- Git

### Installation
```bash
git clone https://github.com/PetrIvan/chord-seq-ai-app.git
cd chord-seq-ai-app
npm install
```

## Code Standards

### JavaScript/TypeScript
- Follow Next.js conventions
- TypeScript strict mode
- Document all public methods with JSDoc

### Max Patches
- Use [m4l-production-guidelines.md] standards
- Document all parameters in patch comments
- Keep abstractions organized

## Workflow

1. Create a feature branch
2. Develop with tests
3. Update documentation
4. Submit PR with:
   - Description of changes
   - Screenshots if UI affected
   - Updated tests

## Testing Requirements
- Unit tests for all new utilities
- Integration tests for WebSocket API
- Manual testing of Max device integration

## Documentation Updates
Required for all changes affecting:
- API interfaces
- User workflows
- Configuration options

## Communication
- Use GitHub issues for tracking
- Document decisions in ADRs (Architecture Decision Records)
- Keep commit messages clear and descriptive