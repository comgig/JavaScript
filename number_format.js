export function number_format(number_input=0, decimal_places=0, separator=',') {
    const formatted = parseFloat(number_input).toFixed(decimal_places).split(".");
    const processing = separator===','
                    ?formatted[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")
                    :formatted[0].replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+separator)
    return String(processing+(formatted[1]?'.'+formatted[1]:""))
}
