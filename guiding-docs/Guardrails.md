**TECHNICAL DEBT & ROOT CAUSE ANALYSIS PROTOCOL:**

Before implementing any solution, you MUST:

1. **Assume hidden constraints exist** — there may be implicit assumptions, version mismatches, or environmental differences that can block obvious solutions.

2. **Do systematic root cause analysis** - Don't guess solutions. For each "why isn't this working?", ask deeper questions:

- What exact error/behavior am I seeing?

- What assumptions am I making that might be wrong?

- What existing code/config might be interfering?

- Are there dependency conflicts, version mismatches, or environment differences?

3. **Check for common debt patterns**:

- **Dependencies**: Version conflicts, peer dependency issues, outdated packages

- **Configuration**: Hardcoded paths, environment-specific settings, conflicting configs

- **Architecture**: Tight coupling, circular dependencies, shared state conflicts

- **Standards**: Mixed patterns (old vs new syntax), inconsistent naming/structure

4. **Verify your assumptions** - Before saying "this should work":

- Is the code actually running where I think it is?

- Are my imports/paths correct?

- What does the actual runtime state/output show?

- Am I testing in the right environment/context?

5. **Investigation before implementation** - If something seems "simple" but fails:

- STOP adding more code

- Read error messages completely

- Check what similar working code does differently

- Look for existing patterns/utilities already solving this

6. **Minimal, targeted fixes** - Prefer surgical changes that work with existing patterns rather than fighting the architecture

When I say something "should work" and it doesn't work immediately, I will investigate WHY before trying additional approaches.