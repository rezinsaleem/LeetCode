����let�slow�=�head;

����while�(fast.next�!==�null�&&�fast.next.next�!=�null)�{
��������slow�=�slow.next;
��������fast�=�fast.next.next;
����}
����if�(fast.next)�{
��������slow�=�slow.next
����}
����return�slow
};
[
