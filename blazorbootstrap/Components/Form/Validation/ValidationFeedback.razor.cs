namespace BlazorBootstrap;

public partial class ValidationFeedback<TValue> : BlazorBootstrapComponentBase
{
    [Parameter]
    public Expression<Func<TValue>> For { get; set; } = default!;

    [Parameter]
    public bool AsTooltip { get; set; }

    [CascadingParameter]
    private EditContext EditContext { get; set; } = default!;

    private FieldIdentifier _fieldIdentifier;

    protected override void OnParametersSet()
    {
        base.OnParametersSet();

        if (EditContext is null)
        {
            throw new InvalidOperationException($"The {GetType()} component have to be placed inside of an {typeof(EditForm)}.");
        }

        _fieldIdentifier = FieldIdentifier.Create(For);
    }

    protected override void OnInitialized()
    {
        base.OnInitialized();
        EditContext.OnValidationStateChanged += EditContext_OnValidationStateChanged;
    }

    private void EditContext_OnValidationStateChanged(object? sender, ValidationStateChangedEventArgs e)
    {
        StateHasChanged();
    }

    protected override string? ClassNames => BuildClassNames(
        Class,
        ("invalid-feedback", !AsTooltip),
        ("invalid-tooltip", AsTooltip));

    protected override void Dispose(bool disposing)
    {
        base.Dispose(disposing);

        if (disposing)
        {
            EditContext.OnValidationStateChanged -= EditContext_OnValidationStateChanged;
        }
    }
}
