����let�maxProfit�=�0;���������
����for�(let�i�=�1;�i�<�prices.length;�i++)�{
��������minPrice�=�Math.min(minPrice,�prices[i]);

�����let�minPrice�=�prices[0];
����let�res�=�[0]
��������maxProfit�=�Math.max(maxProfit,�prices[i]�-�minPrice);
����}

����return�maxProfit;
};
var�maxProfit�=�function�(prices)�{
�*/
�*�@return�{number}
[
