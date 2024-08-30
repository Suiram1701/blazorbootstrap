namespace BlazorBootstrap;

public abstract class InputComponentBase<TValue> : BlazorBootstrapComponentBase
{
    [Parameter]
    public string? Label { get; set; }

    [Parameter]
    public string? HelpText { get; set; }

    [Parameter]
    public TValue Value { get; set; } = default!;

    [Parameter]
    public Expression<Func<TValue>> ValueExpression { get; set; } = default!;

    [Parameter]
    public EventCallback<TValue> ValueChanged { get; set; }

    [Parameter]
    public bool Disabled { get; set; }

    [CascadingParameter]
    protected EditContext? EditContext { get; set; }

    protected ElementReference _elementReference;
    protected FieldIdentifier? _fieldIdentifier;

    protected virtual string FieldCssClass => EditContext?.FieldCssClass(_fieldIdentifier!.Value) ?? string.Empty;

    protected override void OnParametersSet()
    {
        base.OnParametersSet();
        AdditionalAttributes ??= new();

        if (!string.IsNullOrWhiteSpace(HelpText))
        {
            AdditionalAttributes["aria-describedby"] = $"{Id}-desc";
        }
    }

    protected override void OnInitialized()
    {
        base.OnInitialized();

        if (EditContext is not null)
        {
            _fieldIdentifier = FieldIdentifier.Create(ValueExpression);
        }
    }

    public void Enable()
    {
        Disabled = false;
        StateHasChanged();
    }

    public void Disable()
    {
        Disabled = true;
        StateHasChanged();
    }

    public async ValueTask FocusAsync(bool preventScroll = false)
    {
        if (Disabled)
        {
            return;
        }

        await _elementReference.FocusAsync(preventScroll).ConfigureAwait(false);
    }
}
