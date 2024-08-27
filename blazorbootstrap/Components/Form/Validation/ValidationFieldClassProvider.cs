namespace BlazorBootstrap;

public class ValidationFieldClassProvider : ComponentBase, IDisposable
{
    [Parameter]
    public bool DisableValidState { get; set; }

    [CascadingParameter]
    private EditContext EditContext { get; set; } = default!;

    private readonly BootstrapCssClassProvider _provider = new();
    private bool disposedValue;

    protected override void OnParametersSet()
    {
        if (EditContext is null)
        {
            throw new InvalidOperationException($"The {GetType()} component have to be placed inside of an {typeof(EditForm)}.");
        }

        _provider.DisableValidState = DisableValidState;
    }

    protected override void OnInitialized()
    {
        EditContext.SetFieldCssClassProvider(_provider);
        EditContext.OnValidationRequested += EditContext_OnValidationRequested;
    }

    private void EditContext_OnValidationRequested(object? sender, ValidationRequestedEventArgs e)
    {
        _provider.FirstTimeValidated = true;
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!disposedValue)
        {
            if (disposing)
            {
                EditContext.OnValidationRequested -= EditContext_OnValidationRequested;
            }

            disposedValue = true;
        }
    }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        Dispose(disposing: true);
        GC.SuppressFinalize(this);
    }

    private class BootstrapCssClassProvider : FieldCssClassProvider
    {
        public bool DisableValidState { get; set; }

        public bool FirstTimeValidated { get; set; }

        public override string GetFieldCssClass(EditContext editContext, in FieldIdentifier fieldIdentifier)
        {
            if (!(editContext.IsModified(fieldIdentifier) || FirstTimeValidated))     // Show only a state if the field was modified or a validation was requested first time.
            {
                return string.Empty;
            }
            else if (!editContext.GetValidationMessages(fieldIdentifier).Any())
            {
                return !DisableValidState
                    ? "is-valid"
                    : string.Empty;
            }
            else
            {
                return "is-invalid";
            }
        }
    }
}
