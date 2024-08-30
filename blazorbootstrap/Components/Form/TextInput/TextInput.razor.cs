namespace BlazorBootstrap;

public partial class TextInput : InputComponentBase<string>
{
    [Parameter]
    public string Placeholder { get; set; } = string.Empty;

    [Parameter]
    public TextInputType Type { get; set; } = TextInputType.Text;

    [Parameter]
    public InputSize Size { get; set; } = InputSize.Default;

    [Parameter]
    public bool Readonly { get; set; }

    protected override void OnParametersSet()
    {
        base.OnParametersSet();
        AdditionalAttributes["readonly"] = Readonly;
    }

    protected override string? ClassNames => BuildClassNames(
        Class,
        (BootstrapClass.FormControl, true),
        ($"{BootstrapClass.FormControl}-{Size.ToString().ToLower()}", Size != InputSize.Default),
        (FieldCssClass, EditContext is not null));

    private async Task ValueChangedAsync(ChangeEventArgs e)
    {
        if (Readonly || Disabled)
        {
            return;
        }

        await ValueChanged.InvokeAsync(e.Value?.ToString());
        EditContext?.NotifyFieldChanged(_fieldIdentifier!.Value);
    }
}
